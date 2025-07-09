const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Screen Layout Exact Match</title>
      <style>
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Body styling: full height, light gray background, flex container */
        body {
          font-family: 'Inter', Arial, sans-serif; 
          background-color: #f0f0f0; 
          min-height: 100vh;
          display: flex;
          justify-content: center; 
          align-items: center; 
          padding: 0; 
        }

        /* Main container for the screen content - this holds everything inside the white box */
        .main-container {
          display: flex;
          flex-direction: column;
          width: 100%; 
          height: 100vh;
          background-color: #ffffff; 
          border-radius: 0;
          box-shadow: none; 
          margin: 0; 
          overflow: hidden; 
        }

        /* Top button container: horizontal arrangement, no gaps, full width */
        .top-button-container {
          display: flex;
          flex-direction: row;
          justify-content: stretch; 
          width: 100%;
          gap: 0; 
        }

        /* Common styles for all buttons */
        .button {
          flex: 1; 
          padding: 15px;
          border: none;
          color: white;
          font-weight: bold;
          font-size: 14px;
          cursor: pointer;
          transition: opacity 0.2s ease-in-out; 
          text-align: center; 
        }

        .button:hover {
          opacity: 0.9; 
        }

        /* Specific colors for buttons - Matching the original image precisely */
        .blue-button {
          background-color: #0000FF;
        }
        .red-button {
          background-color: #FF0000; 
        }
        .green-button {
          background-color: #008000; 
        }

        /* Top buttons: no border-radius */
        .top-button-container .button {
          border-radius: 0;
        }

        /* Middle text container: takes available space, centered content */
        .middle-text-container {
          flex-grow: 1; 
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: transparent; 
          border-radius: 0; 
          margin: 0;
          padding: 40px 20px;
          min-height: 200px;
        }

        /* Middle text styling */
        .middle-text {
          font-size: 1.5rem; 
          font-weight: 600;
          color: #333;
          text-align: center;
        }

        /* Bottom button container: vertical arrangement, full width, no gaps */
        .bottom-button-container {
          display: flex;
          flex-direction: column; 
          align-items: center; 
          width: 100%;
          padding: 0;
          gap: 0; 
        }

        /* Bottom buttons: full width, no rounded corners */
        .bottom-button-container .button {
          width: 100%; 
          border-radius: 0; 
        }

        /* Responsive adjustments for smaller screens */
        @media (max-width: 768px) {
          .main-container {
            margin: 0;
            border-radius: 0; 
          }
          .middle-text {
            font-size: 1.2rem; 
          }
          .top-button-container .button,
          .bottom-button-container .button {
            padding: 12px;
            font-size: 12px; 
          }
          .middle-text-container {
            margin: 0; 
            min-height: 150px; 
          }
          .bottom-button-container .button {
            width: 100%;
          }
        }
      </style>
    </head>
    <body>
      <div class="main-container">
        <!-- Top Row - 3 Horizontal Buttons -->
        <div class="top-button-container">
          <button class="button blue-button" onclick="handleButtonClick('BLUE')">
            BLUE BUTTON
          </button>
          <button class="button red-button" onclick="handleButtonClick('RED')">
            RED BUTTON
          </button>
          <button class="button green-button" onclick="handleButtonClick('GREEN')">
            GREEN BUTTON
          </button>
        </div>

        <!-- Middle Text -->
        <div class="middle-text-container">
          <div class="middle-text">Write the code for this screen</div>
        </div>

        <!-- Bottom Row - 3 Vertical Buttons -->
        <div class="bottom-button-container">
          <button class="button blue-button" onclick="handleButtonClick('BLUE')">
            BLUE BUTTON
          </button>
          <button class="button red-button" onclick="handleButtonClick('RED')">
            RED BUTTON
          </button>
          <button class="button green-button" onclick="handleButtonPress('GREEN')">
            GREEN BUTTON
          </button>
        </div>
      </div>

      <script>
        // JavaScript function to handle button clicks
        function handleButtonClick(color) {
          console.log(color + ' button clicked!');

          // Update the middle text temporarily
          const middleTextElement = document.querySelector('.middle-text');
          const originalText = middleTextElement.textContent;
          middleTextElement.textContent = \`\${color} button was clicked!\`;

          // Revert text back after a short delay
          setTimeout(() => {
            middleTextElement.textContent = originalText;
          }, 1500); // Revert after 1.5 seconds
        }
        function handleButtonPress(color) {
            handleButtonClick(color);
        }
      </script>
    </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server');
});
