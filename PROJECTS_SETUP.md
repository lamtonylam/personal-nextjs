# Projects Setup

## Overview
The projects page now uses a modular JSON-based configuration for easy project management.

## Adding a New Project

1. Open `src/data/projects.json`
2. Add a new project object to the array with the following fields:

```json
{
  "id": "unique-project-id",
  "name": "Project Name",
  "desc": "Project description (supports HTML)",
  "links": [
    "https://link1.com",
    "https://link2.com"
  ]
}
```

### Field Descriptions

- **id**: A unique identifier for the project (used as React key)
- **name**: The display name of the project
- **desc**: The project description (supports HTML tags like `<br />`, `<small>`, etc.)
- **links**: An array of URLs to link to (repository, demo, etc.)

## Example

```json
{
  "id": "my-new-project",
  "name": "My New Project",
  "desc": "A cool new project I built <br /> <small>Currently in development</small>",
  "links": [
    "https://github.com/username/my-new-project",
    "https://my-new-project.vercel.app"
  ]
}
```

## Building

After adding or modifying projects, run:

```bash
npm run build
```

The projects page will automatically include all projects defined in the JSON file.
