# Project Reorganization Plan

This document outlines the plan to reorganize the ClickMax Design System for better scalability, maintainability, and developer experience.

## Identified Issues

### 1. Duplicate Utilities
- `src/lib/utils.ts` and `src/utils/cn.ts` contain the same `cn()` function
- Two different locations for the same purpose
- Maintenance burden and potential for inconsistency

### 2. Confusing Component Structure
- `primitives/Input` should be in `forms/`
- `primitives/Heading` and `primitives/Text` are typography components
- Mixed concepts within `primitives/`

### 3. Disorganized Documentation Stories
- `src/docs/` contains stories that could be better organized
- Lack of clear separation between foundation and components

### 4. Isolated Playground
- `src/components/playground/` could be at `src/playground/`
- Not really a reusable component, more of a development tool

## Proposed Structure

```
src/
├── components/
│   ├── foundation/           # Pure primitive components
│   │   ├── Badge/
│   │   ├── Button/
│   │   └── Icon/
│   │
│   ├── forms/               # Form-related components
│   │   ├── Checkbox/
│   │   ├── Input/          # MOVED from primitives
│   │   ├── Radio/
│   │   ├── Switch/
│   │   └── Textarea/
│   │
│   ├── layout/              # Layout components
│   │   └── Card/
│   │
│   ├── typography/          # Typography components
│   │   ├── Heading/        # MOVED from primitives
│   │   └── Text/           # MOVED from primitives
│   │
│   └── index.ts
│
├── docs/                    # Documentation stories
│   ├── foundation/
│   │   ├── Colors.stories.tsx
│   │   ├── Typography.stories.tsx
│   │   ├── Spacing.stories.tsx
│   │   ├── Effects.stories.tsx
│   │   └── Icons.stories.tsx
│   │
│   ├── getting-started/
│   │   ├── Introduction.stories.tsx
│   │   └── InteractiveColors.stories.tsx
│   │
│   └── Playground.stories.tsx
│
├── utils/                   # Consolidated utilities
│   ├── cn.ts               # Class name utility
│   └── index.ts            # Export all utilities
│
├── playground/              # Development tools
│   ├── CodePreview.tsx
│   ├── ComponentPalette.tsx
│   ├── DropZone.tsx
│   └── componentRegistry.tsx
│
├── tokens/
├── styles/
├── hooks/
├── providers/
└── types/
```

## Benefits of Reorganization

### 1. Clear Separation of Responsibilities
- **foundation/**: Primitive components (Button, Badge, Icon)
- **forms/**: All form components together
- **typography/**: Text components separated
- **layout/**: Structural components

### 2. Better Developer Experience
- Easy to find components by category
- More intuitive imports
- Improved scalability

### 3. Story Organization
- Documentation stories separated by category
- Easy navigation in Storybook
- Structure aligned with Storybook sidebar

### 4. Utility Consolidation
- Single location for utilities
- No code duplication
- Centralized exports

## Migration Checklist

### Phase 1: Consolidate Utilities ✅
- [x] Keep only `src/utils/`
- [x] Remove `src/lib/`
- [x] Update all imports from `@/lib/utils` to `@/utils`

### Phase 2: Reorganize Components
- [ ] Create `src/components/foundation/`
- [ ] Move Badge, Button, Icon to `foundation/`
- [ ] Create `src/components/typography/`
- [ ] Move Heading and Text to `typography/`
- [ ] Move Input to `forms/`
- [ ] Remove `primitives/` folder

### Phase 3: Reorganize Stories
- [ ] Create `docs/foundation/` structure
- [ ] Move foundation stories
- [ ] Create `docs/getting-started/`
- [ ] Adjust paths in Storybook

### Phase 4: Move Playground
- [ ] Move `src/components/playground/` to `src/playground/`
- [ ] Update imports

### Phase 5: Update Exports
- [ ] Update `src/components/index.ts`
- [ ] Update barrel exports
- [ ] Verify imports in stories

### Phase 6: Testing
- [ ] Verify Storybook build
- [ ] Verify project build
- [ ] Test all components

## New Import Structure

```tsx
// Before
import { Button } from '@/components/primitives/Button';
import { Input } from '@/components/primitives/Input';
import { Heading } from '@/components/primitives/Heading';

// After
import { Button } from '@/components/foundation/Button';
import { Input } from '@/components/forms/Input';
import { Heading } from '@/components/typography/Heading';

// Or using barrel exports
import { Button } from '@/components/foundation';
import { Input } from '@/components/forms';
import { Heading } from '@/components/typography';
```

## Storybook Structure

```
A. Getting Started
  - Introduction
  - Interactive Colors Guide

B. Foundation
  - Colors
  - Typography
  - Spacing
  - Effects
  - Icons

C. Components
  ├─ Foundation
  │  ├─ Badge
  │  ├─ Button
  │  └─ Icon
  │
  ├─ Typography
  │  ├─ Heading
  │  └─ Text
  │
  ├─ Forms
  │  ├─ Checkbox
  │  ├─ Input
  │  ├─ Radio
  │  ├─ Switch
  │  └─ Textarea
  │
  └─ Layout
     └─ Card

D. Playground
  - Interactive Playground
```

## Important Notes

1. **Don't break existing imports**: Maintain temporary exports during migration
2. **Gradual migration**: Work in small phases and test
3. **Git commits**: Commit each phase separately
4. **Documentation**: Update README after migration

---

## Related Documentation

- [Reorganization Summary](./summary.md) - Phase 1 completion summary
- [Reorganization Complete](./complete.md) - Full completion report
- [Migration Guide](/guide/migration.md) - How to migrate your code
