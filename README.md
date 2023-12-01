

# On-This-Day Scraper with Express.js
```
This application utilizes Express.js along with Axios and Cheerio to scrape historical events, births, and deaths data from the Time and Date website's "On This Day" section.
```
## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/on-this-day-scraper.git
   cd on-this-day-scraper
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Starting the Server

Run the server using:
```bash
npm start
```

### Endpoints

#### Fetching Today's Historical Data
- Endpoint: `GET /api/On-This-Day/`
- Description: Retrieves historical data for today's date from Time and Date.
- Example:
  ``` js
  curl http://localhost:8000/api/On-This-Day/
  ```

#### Fetching Historical Data for a Specific Date
- Endpoint: `GET /api/On-This-Day/past/:month/:day`
- Description: Retrieves historical data for a specific date (month and day) from Time and Date.
- Example:
  ```js
  curl http://localhost:8000/api/On-This-Day/past/12/25
  ```

## Example Response

```json
{
  "Events": [
    {
      "title": "Event Title 1",
      "detail": "Event Description 1"
    },
    {
      "title": "Event Title 2",
      "detail": "Event Description 2"
    },
    // ... more events
  ],
  "birthsAndDeaths": {
    "births": [
      {
        "title": "Person Name",
        "detail": "Birth Description"
      },
      // ... more births
    ],
    "deaths": [
      {
        "title": "Person Name",
        "detail": "Death Description"
      },
      // ... more deaths
    ]
  }
}
```

## Notes

- This application demonstrates web scraping techniques and basic usage of Express.js for fetching and rendering historical data.
- Feel free to expand or integrate this functionality into your applications for historical data retrieval.


This `README.md` provides users with installation instructions, details about endpoints, usage examples with `curl` commands, and an example response format to demonstrate how to use the API endpoints. Adjust the endpoints, port number, and installation instructions as needed based on your specific setup and requirements.


### Endpoints Explanation

1. **`GET /api/On-This-Day/`**
   - **Description:** This endpoint retrieves historical data for today's date from the Time and Date website.
   - **Usage:** It doesn't require any parameters as it fetches data for the current date by default.
   - **Example:** Accessing this endpoint (e.g., `http://localhost:8000/api/On-This-Day/`) will return historical events, births, and deaths for today.

2. **`GET /api/On-This-Day/past/:month/:day`**
   - **Description:** This endpoint retrieves historical data for a specific date (specified by the `:month` and `:day` parameters) from Time and Date.
   - **Usage:** Pass the month and day as parameters to retrieve data for a particular date in the past.
   - **Example:** Accessing this endpoint (e.g., `http://localhost:8000/api/On-This-Day/past/december/25`) will return historical events, births, and deaths for December 25th.

### How to Use

To interact with these endpoints, you can use tools like `curl` for command-line HTTP requests or make requests from your browser, Postman, or any other API testing tool.

#### Using `curl` for Command-Line Requests

- To fetch data for today's date:
  ```bash
  curl http://localhost:8000/api/On-This-Day/
  ```

- To fetch data for a specific date (e.g., December 25th):
  ```bash
  curl http://localhost:8000/api/On-This-Day/past/december/2
  ```

These `curl` commands will make GET requests to the respective endpoints, and the server will respond with JSON data containing historical events, births, and deaths for the requested date.

#### Using Other Tools

You can also access these endpoints using browser URLs or API testing tools like Postman. Simply enter the appropriate endpoint URL (`http://localhost:8000/api/On-This-Day/` or `http://localhost:8000/api/On-This-Day/past/:month/:day`) in the address bar or within your testing tool to retrieve the historical data as JSON responses.

### thanks you for visiting this Repo . Have a Nice Day! (' @ ')