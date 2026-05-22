# Relocation Quest

Relocation Quest is a relocation planning system designed around the real process of moving from Seoul to Berlin.

Instead of treating relocation as a generic todo list, the project models it as a long multi-phase journey involving:

- migration planning
- physical inventory management
- temporary travel packing
- bulk logistics workflows
- uncertainty reduction

The app combines:

- task management
- inventory organization
- travel container assignment
- drag-and-drop interaction
- persistent local storage
- relocation-specific UX systems

## Core Concept

Relocation is treated as a staged system rather than a simple checklist.

The product currently separates responsibilities into three connected areas:

| System | Purpose |
|--------|---------|
| Progress | Time-based relocation phases and checkpoints |
| Categories | Stable inventory organization and buying decisions |
| Packing | Temporary travel container assignment |

The same inventory data is reused across systems.

## Main Systems

### Progress

Phase-based relocation planning.

**Features**

- Multiple relocation phases
- Editable phase ranges
- Chronological phase ordering
- Due-date grouped checkpoints
- Task status filtering
- Drag-and-drop checkpoint sorting
- Bulk task creation
- Import historical relocation records
- Multi-select mode
- Bulk delete
- Inline editing
- Phase progress calculation

**UX Details**

- Selection mode reduces accidental completion
- Reordering preserves manual ordering
- Bulk-added tasks preserve insertion order
- Reduced motion for calmer interaction
- Improved drag stability

### Categories

Long-term inventory organization.

This system answers:

> "What do I own, what do I need, and where should I buy it?"

**Features**

- Category sections
- Topic grouping inside categories
- Shared inventory persistence
- Inline item editing
- Bulk add items
- Topic-based bulk add
- Multi-select mode
- Bulk deletion

**Item States**

- Already have
- Need to buy
- Buy in Korea
- Buy in Germany
- Cannot bring

**Current UX Direction**

- Compact checklist layout
- Lower visual noise
- Faster editing workflows
- Reduced modal dependency
- Cleaner topic management

### Packing

Travel container assignment system.

**Philosophy**

Categories represent permanent organization.

Packing represents temporary travel logistics.

The same inventory items are reused across both systems.

**Features**

- Shared inventory data source
- Multiple travel containers:
  - 26-inch suitcase
  - 20-inch suitcase
  - Backpack
  - Hip bag
  - Korea shipment
- Unassigned item pool
- Category-grouped packing sections
- Container progress visualization
- Persistent manual ordering
- Search inside unassigned items
- Drag-and-drop assignment workflow
- Category-level packing workflow

**Current Interaction Model**

Users can:

- move individual items
- drag items into containers
- move entire categories
- reorder unassigned items
- edit inventory globally
- remove items from all systems

**Recent UX Improvements**

- Reduced animation intensity
- Drag handles for stable interaction
- Lower interaction noise
- Cleaner grouped layout
- Category-based packing workflow
- Improved visual hierarchy
- Safer destructive actions

## Shared Inventory Architecture

Categories and Packing operate on the same underlying inventory model.

This enables:

- single source of truth
- synchronized editing
- shared persistence
- shared metadata
- shared deletion lifecycle

Example:

> Deleting an item in Packing also removes it from Categories.

## Persistence

The app currently uses:

- Zustand persist middleware
- localStorage persistence
- versioned client schema
- JSON backup/restore

Data survives:

- refreshes
- interaction refactors
- UI redesigns
- reorder operations

The app also includes:

- corrupted storage detection
- import validation
- backup export/import

## Technical Stack

| Area | Tech |
|------|------|
| Framework | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| State | Zustand |
| Animation | Framer Motion |
| Icons | lucide-react |
| Persistence | localStorage |

## Interaction Design Priorities

The project focuses heavily on:

- relocation-specific workflows
- low-friction editing
- reduced cognitive load
- smooth drag interactions
- persistent state safety
- bulk operations
- calmer interfaces

The goal is not maximum feature count.

The goal is:

- clarity
- stability
- workflow speed
- reduced uncertainty
- real-world usefulness

## Design Direction

The UI is intentionally moving toward:

- lighter interfaces
- denser information layout
- fewer oversized cards
- calmer interaction patterns
- faster bulk workflows

Examples include:

- grouped packing categories
- compact checklist rows
- inline editing
- drag handles
- reduced motion
- contained action controls
- shared inventory persistence

## Project Structure

```
app/
  globals.css
  layout.tsx
  page.tsx

components/
  PhaseModal.tsx
  TaskModal.tsx
  ProgressBar.tsx
  SegmentedNav.tsx
  PackingItemCard.tsx
  PackingContainerCard.tsx
  PackingUnassignedQueue.tsx

lib/
  store.ts
  persistence.ts
  seed.ts
  date.ts
  types.ts
```

## Development

```bash
npm install
npm run dev
```

Open:

```
http://127.0.0.1:3000
```

## Current Status

Active in-development prototype.

Current functional systems:

- Progress
- Categories
- Packing
- Shared inventory persistence
- Drag-and-drop workflows
- Bulk operations
- Record importing
- Phase management
- Packing container assignment

The project is currently focused on:

> UX refinement + interaction polish + relocation workflow optimization

## Planned Directions

### Progress

- Undo restore for accidental deletion
- Better phase analytics
- Calendar integrations
- Dependency visualization

### Categories

- Topic rename system
- Topic management UI
- Cleaner metadata editing
- Faster bulk workflows

### Packing

- Cross-category drag refinement
- Better container interactions
- Packing optimization views
- Weight / volume estimation
- Multi-currency relocation cost tracking

### Long-Term

- Cloud sync
- Authentication
- Multi-device persistence
- AI-assisted relocation suggestions
- Relocation templates
- Document vault system
