# Resume Generator

A simple, modern and responsive resume generator built with Angular. This application allows you to create beautiful resumes using JSON data.

## Installation

1. Clone the repository:
    ```bash
    git clone git@github.com:QianqianQ/resume-generator.git
    cd resume-generator
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. To start a local development server:
    ```bash
    ng serve
    ```

    Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

2. To customize your resume, edit the JSON file at `public/resume-data.json`

## Customization

### Styling
- The main styles are in `src/styles.scss`
- Component-specific styles are in `src/app/resume/resume.component.scss`

### Layout
- The resume layout is responsive and will adjust based on screen size
- Desktop: Two-column layout
- Tablet: Single column with optimized spacing
- Mobile: Stacked layout with adjusted typography
- Print: Optimized for paper format

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.
