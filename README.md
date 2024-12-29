# Skin Video analysis tool Project

## Project Overview

This project is a web application designed to guide users through capturing five images of skin diagnostic device, sending them to a mock server, and displaying the results. It's built using React with Next.js and includes a Node.js mock server for handling image submissions.

## Table of Contents

- [General Approach](#general-approach)
  - [Design and UX](#design-and-ux)
  - [Technology Choices](#technology-choices)
  - [Device/Browser Requirements](#devicebrowser-requirements)
- [Setup and Running Instructions](#setup-and-running-instructions)
- [Third-party Tools and Resources](#third-party-tools-and-resources)

## General Approach

### Design and UX

The application was designed with a focus on simplicity and user-friendliness. A step-by-step wizard approach was chosen to guide users through the image capture process, ensuring a clear and intuitive flow. The UI was kept minimal yet informative, with progress indicators and clear instructions at each step.

Key UX considerations:

- Clear, concise instructions for each capture step
- Visual feedback on capture progress
- Responsive design for various screen sizes
- Accessibility considerations in color contrast and button sizes

### Technology Choices

- **Frontend**: React with Next.js (App Router)
  - Chosen for its robust ecosystem, server-side rendering capabilities, and efficient routing
- **Styling**: Tailwind CSS
  - Provides rapid development and consistent styling
- **Backend**: Node.js
  - Lightweight and efficient for the mock server requirements
- **State Management**: React's built-in useState and useEffect hooks
  - Sufficient for the application's needs without introducing additional complexity

### Device/Browser Requirements

- The application is designed to work on modern web browsers (Chrome, Firefox, Safari, Edge)
- Desktop compatibility:
  - Windows 10+ (Chrome, Firefox, Edge)
  - macOS 10.12+ (Safari, Chrome, Firefox)
- Requires camera access for image capture functionality

## Setup and Running Instructions

1. Clone the repository:

   ```
   git clone [repository-url]
   cd Skin-Video-analysis-tool
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the mock server:

   ```
   node server.js
   ```

4. In a separate terminal, start the Next.js development server:

   ```
   npm run dev
   ```

5. Open a web browser and navigate to `http://localhost:3000`

6. To test, follow the on-screen instructions to capture and submit images

## Third-party Tools and Resources

1. **Next.js**: React framework for production-grade applications
2. **Tailwind CSS**: Utility-first CSS framework for rapid UI development
3. **Lucide React**: Icon set for consistent and scalable vector icons
4. **ESLint**: For code linting and maintaining code quality
5. **Prettier**: Code formatter for consistent code style
6. **GitHub**: Version control and collaboration
7. **Node.js**: JavaScript runtime for the mock server
8. **ChatGPT**: Used for code suggestions, debugging assistance, and documentation help

This project leveraged these tools to create a modern, efficient, and user-friendly web application while adhering to best practices in web development.

## Project Structure

```
Skin Video analysis tool-test/
├── app/
│   ├── capture/
│   │   └── page.tsx
│   ├── results/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
├── public/
├── styles/
│   └── globals.css
├── next.config.js
├── package.json
├── README.md
├── server.js
├── tailwind.config.js
└── tsconfig.json
```

## License

This project is open source and available under the MIT License.
