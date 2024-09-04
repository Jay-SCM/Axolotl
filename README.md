-- # Axolotl

-- ## Overview

-- This project integrates a custom application launcher with a Spotify Web Playback SDK for a seamless music experience. It includes a notepad for note-taking and leverages a backend and Rust component for dynamic -- app management.

-- ## Features

--  **Spotify Integration:**
  - Spotify Web Playback SDK integration.
  - Spotify login and token management.
  - Playlist display and music playback controls.

- **App Launcher:**
  - Categorized application launcher with a dynamic grid.
  - Categories include Games, Development, Web, Office, and Tools.

- **Notepad:**
  - Simple text editor for taking and saving notes.

- **Backend Integration:**
  - API endpoint for launching applications.

- **Rust Component:**
  - Generates and manages `AppPaths.json` for dynamic app paths.

## Getting Started

### Prerequisites

- Node.js and npm/yarn installed.
- A Spotify Developer account for obtaining a `client_id`.
- Rust and Tauri installed for the backend component.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Jay-SCM/Axolotl.git


## Install Frontend Dependencies

```bash
npm install
# or
yarn install 
```

# Environment Variables
Create a .env.local file in the root directory and add your Spotify client_id:

```bash
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your-spotify-client-id
```

# Run the Frontend Application

```bash
npm run dev
```

# Add Rust Dependencies
Update your Cargo.toml file with the necessary dependencies:

```
[build-dependencies]
tauri-build = { version = "1.5.4", features = [] }
[dependencies]
serde_json = "1.0"
serde = { version = "1.0", features = ["derive"] }
tauri = { version = "1.7.2", features = [] }
actix-web = "4.0"
tokio = { version = "1", features = ["full"] }
winapi = { version = "0.3", features = ["winuser", "shellapi"] }
```
This will generate the AppPaths.json file required by the frontend.

Frontend Components
AppLauncher
Description: Displays a sidebar with categorized app lists and a grid for launching applications.

Features:

Categorizes apps into predefined categories.
Allows launching applications with a Launch button.
Notepad
Description: Simple text editor for taking notes.

Features:

Resizable textarea for entering and editing text.
Spotify
Description: Integrates Spotify Web Playback SDK for music playback.

Features:

Spotify login for user authentication.
Displays playlists and allows playback of selected tracks.
Controls for play, pause, next, previous, and volume.
Backend Component
The backend is responsible for handling API requests to launch applications. It provides an endpoint /api/launchApp for launching applications from the frontend.


 
