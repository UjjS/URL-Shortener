# URL Shortener

This is a simple URL shortener service that allows users to create short versions of long URLs.

## Features

- Shorten long URLs into easy-to-share shortened URLs.
- Redirect users from the shortened URL to the original long URL.

## Getting Started

Follow these instructions to set up and run the URL shortener on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) installed and running locally.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/url-shortener.git

2. **Change into the project directory:**

   ```bash
   cd url-shortener

3. **Install dependencies:**

   ```bash
   npm install

4. **Create a .env file in the project root and add the following:**

   ```bash
   PORT=5000 
   MONGO_URI=mongodb://localhost:27017/url-shortener
   BASE_URL=http://localhost:5000

5. **Start the server:**

   ```bash
   npm start

## API Endpoints

**POST /api/url/shorten:** Shorten a long URL.

**Request Body:**
```json
{
  "longUrl": "https://example.com/your-long-url"
  "shortUrl": "http://localhost:5000/abc123",
  "urlCode": "abc123",
  "date": "2023-01-01T12:00:00.000Z",
  "_id": "1234567890"
}


   
