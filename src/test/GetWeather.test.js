import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axiosMock from "../mocks/axiosMock";
import WeatherDetails from "../components/WeatherDetails";

afterEach(cleanup);

describe("getWeather Api Call", () => {
  it("fetches and displays data", async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: { temp: 80 },
      name: "Sharon Hill",
    });

    const weatherInfo = {
      main: {
        temp: 80,
        temp_min: 73,
        temp_max: 85,
      },
      name: "Sharon Hill",
      weather: [
        {
          description: "Scattered Clouds",
        },
      ],
    };

    const { getByTestId } = render(
      <WeatherDetails weatherInfo={weatherInfo} />
    );

    const temp = await waitFor(() => getByTestId("temp"));
    const min = await waitFor(() => getByTestId("min"));
    const max = await waitFor(() => getByTestId("max"));
    const desc = await waitFor(() => getByTestId("desc"));
    const city = await waitFor(() => getByTestId("city"));

    expect(temp).toHaveTextContent(80);
    expect(min).toHaveTextContent(73);
    expect(max).toHaveTextContent(85);
    expect(desc).toHaveTextContent(/Scattered Clouds/);
    expect(city).toHaveTextContent(/Sharon Hill/);
  });
});
