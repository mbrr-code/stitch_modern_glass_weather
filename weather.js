const API_KEY = '5d3216fe818cf1adcf8a692f8d3f4a0c';
const API_BASE = 'https://api.openweathermap.org/data/2.5';

async function getWeather(city) {
  const res = await fetch(`${API_BASE}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`);
  return res.json();
}

async function getForecast(city) {
  const res = await fetch(`${API_BASE}/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=fr`);
  return res.json();
}

function getCity() {
  return localStorage.getItem('skyglass_city') || 'Paris';
}

function saveCity(city) {
  localStorage.setItem('skyglass_city', city);
}

function getUnit() {
  return localStorage.getItem('skyglass_unit') || 'metric';
}

function weatherIcon(code) {
  if (code.startsWith('01')) return 'clear_day';
  if (code.startsWith('02') || code.startsWith('03')) return 'partly_cloudy_day';
  if (code.startsWith('04')) return 'cloud';
  if (code.startsWith('09') || code.startsWith('10')) return 'rainy';
  if (code.startsWith('11')) return 'thunderstorm';
  if (code.startsWith('13')) return 'ac_unit';
  return 'wb_sunny';
}

const NAV_PAGES = {
  dashboard: '../weather_dashboard/code.html',
  forecast:  '../detailed_forecast/code.html',
  map:       '../weather_radar_map/code.html',
  settings:  '../settings/code.html'
};

function navigate(page) {
  window.location.href = NAV_PAGES[page];