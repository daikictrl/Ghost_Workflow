We need the base chrome components that frame every editor screen - the top Navbar and the left sidebar shell. These will be reused and extended in every chapter that follows 

### Editor Navbar

Create `components/editor/editor-navbar.tsx`.

Requirements:

- fixed-height top navbar
- Left, center, and right sections 
- Left section contains sidebar toggle button 
- use `PanelLeftOpen` / `PanelLeftClose` icons based on sidebar state
- Right section stays empty for now 
- Dark background with subtle bottom border 

### Project sidebar

Create `components/editor/project-sidebar.tsx`.

Requirements

- sidebars should float above the editor canvas 
- opening it should not push page content 
- Slides in from the left 
- Accepts `isOpen` prop
- header with `Projects` title + close button
- shadcn `Tabs`;
  - My Projects
  - Shared
- both tabs show empty placeholder state
- full-width `New Project` button at the buttom with `Plus` icon

### Dialog Pattern

Use the existing color tokens from `global.css` for dialog styling.

Support:

- title
- description
- Footer actions 

Do not build actual dialog yet.

### Check when done

- New components compile without Typescript error
- No lint errors
- dialog pattern is ready for future use 