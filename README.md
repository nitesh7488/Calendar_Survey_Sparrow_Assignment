visit on live:  https://calendar-survey-sparrow-assignment.onrender.com/


# Calendar App

## Overview

This is a React-based calendar application styled with Tailwind CSS. It provides a user-friendly calendar interface similar to Google Calendar.

## Features

- Displays the current month and year by default, with a grid layout showing all the dates.
- Users can navigate to previous and next months using designated buttons.
- The current date is visually highlighted within the calendar grid.
- Events are loaded from a static JSON file (`public/events.json`).
- Each event includes details like title, date, time, duration, color, and description.
- Events are visually represented on the corresponding dates within the calendar grid.
- The calendar interface handles potential conflicts when multiple events are scheduled on the same date and time by color-coding overlapping events and displaying a notification.

## Event Data Format

Events are stored in a static JSON file with the following structure:

## Conflict Handling

- Events that overlap in time on the same date are detected.
- Conflicting events are visually indicated with a red border.
- A notification alert is displayed if there are any scheduling conflicts.

## Technologies Used

- React
- Tailwind CSS
- dayjs for date handling

## Deployment

The app can be deployed using GitHub Pages or similar static hosting services.

## Usage

- Run `npm start` to start the development server.
- Run `npm run build` to create a production build.
- Deploy the build folder to your preferred hosting service.
