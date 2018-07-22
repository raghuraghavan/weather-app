import React from 'react';
import {
  Divider,
  Grid,
  Header,
  Icon,
  Responsive,
  Statistic,
} from 'semantic-ui-react';
// External Libraries
import locale2 from 'locale2';
// Sibling Components
// import ControlUnits from './control-units';
// import ForecastRowDayNames from './forecast-row-day-names';
// import ForecastRowIcons from './forecast-row-icons';
// import ForecastRowRisesAndSets from './forecast-row-rises-and-sets';
// import ForecastRowTemperatures from './forecast-row-temperatures';
import GridResponsiveLocationData from './grid-responsive-location-data';
import RowMiscellaneous from './row-miscellaneous';
import RowSunMoon from './row-sun-moon';
import RowWind from './row-wind';
// Custom Code
import {
  getCurrentMiscellaneous,
  getCurrentWind,
  getForecastCurrentDay,
  getForecastRowDayNames,
  getForecastRowIcons,
  getForecastRowRisesAndSets,
  getForecastRowTemperatures,
} from './data-snippets';
import { getDateStringFromEpoch, getDayStringFromEpoch, isObjectEmpty } from '../../engine/tools';
import { currentUnitType, forecastUnitType } from './utilities';
import { getkApixuColor, getApixuIconName } from './icon-map';
// Custom Styles
import 'weather-icons-tmp/css/weather-icons.min.css';
import 'weather-icons-tmp/css/weather-icons-wind.min.css';
import './index.css';

class WeatherReport extends React.Component {
  constructor(props) {
    super(props);

    let isBrowserMetric = true;

    // avoid metric if browser is using US locale
    if (locale2.toLowerCase() === 'en-us') {
      isBrowserMetric = false;
    }

    this.state = {
      isBrowserMetric,
      activeUnit: true,
      defaultUnit: isBrowserMetric ? 'metric' : 'imperial',
    };
  }

  render() {
    let sUnit = '';
    const { activeUnit, defaultUnit, isBrowserMetric } = this.state;
    const isEmpty = isObjectEmpty(this.props);
    if (isBrowserMetric) {
      sUnit = activeUnit ? 'metric' : 'imperial';
    } else {
      sUnit = activeUnit ? 'imperial' : 'metric';
    }

    const { current, forecast, location } = this.props || {};
    let isDay = true;
    let nCondition = '';
    let currentMiscellaneous = {};
    let currentWind = {};
    let forecastCurrentDay = {};

    if (!isEmpty) {
      if (current[currentUnitType.other.isDay] === 0) {
        isDay = false;
      }
      nCondition = current.condition.code;
      currentMiscellaneous = getCurrentMiscellaneous(current,
        currentUnitType, sUnit, forecast.forecastday[0].day.uv);
      currentWind = getCurrentWind(current, currentUnitType, sUnit);
      forecastCurrentDay = getForecastCurrentDay(forecast.forecastday[0], forecastUnitType, sUnit);
    }

    return (
      <div>
        {isEmpty && (
          <Grid divided="vertically">
            <Grid.Row columns={1}>
              <Grid.Column textAlign="center">
                <h2>
                  Weather Report
                </h2>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
        {!isEmpty && (
          <Grid>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Header size="tiny" floated="right">
                  {getDayStringFromEpoch(current[currentUnitType.other.lastUpdated], 'long')}
                  {', '}
                  {getDateStringFromEpoch(current[currentUnitType.other.lastUpdated])}
                </Header>
              </Grid.Column>
              <Grid.Column textAlign="center">

                <Header as="h2" icon textAlign="center">
                  <i className={`weather-spacer wi wi-${getApixuIconName(isDay, nCondition)} ${getkApixuColor(isDay, nCondition)}`} />

                  <Header.Content>
                    <br />
                    {current.condition.text}
                  </Header.Content>

                  <Statistic size="huge">
                    <Statistic.Value>
                      {current[currentUnitType[sUnit].temperature.actual]}
                    </Statistic.Value>
                  </Statistic>

                </Header>

                <br />

                <Responsive maxWidth={375}>
                  <GridResponsiveLocationData
                    columns={1}
                    minimum={forecastCurrentDay.temperature.minimum}
                    feelsLike={current[currentUnitType[sUnit].temperature.feelsLike]}
                    maximum={forecastCurrentDay.temperature.maximum}
                    unit={currentUnitType[sUnit].temperature.unit}
                    name={location.name}
                    region={location.region}
                    country={location.country}
                  />
                </Responsive>
                <Responsive minWidth={376}>
                  <GridResponsiveLocationData
                    columns={3}
                    minimum={forecastCurrentDay.temperature.minimum}
                    feelsLike={current[currentUnitType[sUnit].temperature.feelsLike]}
                    maximum={forecastCurrentDay.temperature.maximum}
                    unit={currentUnitType[sUnit].temperature.unit}
                    name={location.name}
                    region={location.region}
                    country={location.country}
                  />
                </Responsive>

              </Grid.Column>
            </Grid.Row>

            <Divider />

            <Grid.Row className="compacted-row">
              <Grid.Column>
                <Responsive maxWidth={375}>
                  <RowSunMoon
                    sunrise={forecastCurrentDay.sun.rise}
                    sunset={forecastCurrentDay.sun.set}
                    moonrise={forecastCurrentDay.moon.rise}
                    moonset={forecastCurrentDay.moon.set}
                    columns={2}
                  />
                </Responsive>

                <Responsive minWidth={376}>
                  <RowSunMoon
                    sunrise={forecastCurrentDay.sun.rise}
                    sunset={forecastCurrentDay.sun.set}
                    moonrise={forecastCurrentDay.moon.rise}
                    moonset={forecastCurrentDay.moon.set}
                    columns={4}
                  />
                </Responsive>
              </Grid.Column>
            </Grid.Row>

            <Divider />

            <Grid.Row className="compacted-row">
              <Grid.Column>
                <RowWind
                  wind={currentWind}
                  columns={4}
                />
              </Grid.Column>
            </Grid.Row>

            <Divider />

            <Grid.Row className="compacted-row">
              <Grid.Column>
                <Responsive maxWidth={375}>
                  <RowMiscellaneous
                    misc={currentMiscellaneous}
                    columns={2}
                  />
                </Responsive>

                <Responsive minWidth={376}>
                  <RowMiscellaneous
                    misc={currentMiscellaneous}
                    columns={4}
                  />
                </Responsive>
              </Grid.Column>
            </Grid.Row>

            <Divider />

            <Grid.Row>
              <Grid.Column>
                <br />
                <Header>
                  The Days Ahead
                  {' '}
                  <Icon
                    name="arrow alternate circle right outline"
                  />
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
      </div>
    );
  }
}

export default WeatherReport;
