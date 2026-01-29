# Migration Guide - New Structure

For those working with older versions of the project, this guide helps migrate to the new structure.

## Import Changes

### Foundation Components

```diff
- import { Button } from './components/primitives/Button';
+ import { Button } from './components/foundation/Button';

- import { Badge } from './components/primitives/Badge';
+ import { Badge } from './components/foundation/Badge';

- import { Icon } from './components/primitives/Icon';
+ import { Icon } from './components/foundation/Icon';
```

### Typography Components

```diff
- import { Heading } from './components/primitives/Heading';
+ import { Heading } from './components/typography/Heading';

- import { Text } from './components/primitives/Text';
+ import { Text } from './components/typography/Text';
```

### Form Components

```diff
- import { Input } from './components/primitives/Input';
+ import { Input } from './components/forms/Input';

# Other form components haven't changed
✅ import { Checkbox } from './components/forms/Checkbox';
✅ import { Radio } from './components/forms/Radio';
✅ import { Switch } from './components/forms/Switch';
✅ import { Textarea } from './components/forms/Textarea';
```

### Utilities

```diff
- import { cn } from '@/lib/utils';
+ import { cn } from '@/utils';
```

## Search and Replace

Use these commands to update automatically:

### macOS/Linux

```bash
# Update Button
find . -type f -name "*.tsx" -exec sed -i '' "s|from './components/primitives/Button'|from './components/foundation/Button'|g" {} \;

# Update Badge
find . -type f -name "*.tsx" -exec sed -i '' "s|from './components/primitives/Badge'|from './components/foundation/Badge'|g" {} \;

# Update Icon
find . -type f -name "*.tsx" -exec sed -i '' "s|from './components/primitives/Icon'|from './components/foundation/Icon'|g" {} \;

# Update Heading
find . -type f -name "*.tsx" -exec sed -i '' "s|from './components/primitives/Heading'|from './components/typography/Heading'|g" {} \;

# Update Text
find . -type f -name "*.tsx" -exec sed -i '' "s|from './components/primitives/Text'|from './components/typography/Text'|g" {} \;

# Update Input
find . -type f -name "*.tsx" -exec sed -i '' "s|from './components/primitives/Input'|from './components/forms/Input'|g" {} \;

# Update utils
find . -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' "s|from '@/lib/utils'|from '@/utils'|g" {} \;
```

### VS Code (Search & Replace)

1. Open global search (Cmd+Shift+F / Ctrl+Shift+F)
2. Enable Replace mode
3. Use these replacements:

```
# Foundation
Find:    from './components/primitives/Button'
Replace: from './components/foundation/Button'

Find:    from './components/primitives/Badge'
Replace: from './components/foundation/Badge'

Find:    from './components/primitives/Icon'
Replace: from './components/foundation/Icon'

# Typography
Find:    from './components/primitives/Heading'
Replace: from './components/typography/Heading'

Find:    from './components/primitives/Text'
Replace: from './components/typography/Text'

# Forms
Find:    from './components/primitives/Input'
Replace: from './components/forms/Input'

# Utils
Find:    from '@/lib/utils'
Replace: from '@/utils'
```

## Migration Checklist

After making changes, verify:

- [ ] All imports have been updated
- [ ] No more references to `primitives/`
- [ ] No more references to `@/lib/utils`
- [ ] `npm run build` executes without errors
- [ ] `npm run storybook` works correctly
- [ ] TypeScript reports no errors

## Verification Commands

```bash
# Check if there are still old imports
grep -r "primitives/Button" src/
grep -r "primitives/Badge" src/
grep -r "primitives/Icon" src/
grep -r "primitives/Heading" src/
grep -r "primitives/Text" src/
grep -r "primitives/Input" src/
grep -r "@/lib/utils" src/

# If nothing is returned, you're OK! ✅
```

## Using Barrel Exports

Now you can import multiple components from one category:

```tsx
// Before (individual imports)
import { Button } from './components/foundation/Button';
import { Badge } from './components/foundation/Badge';
import { Icon } from './components/foundation/Icon';

// After (barrel export)
import { Button, Badge, Icon } from './components/foundation';
```

```tsx
// Typography
import { Heading, Text } from './components/typography';

// Forms
import { Input, Checkbox, Radio, Switch, Textarea } from './components/forms';

// Layout
import { Card, CardHeader, CardTitle, CardContent } from './components/layout';
```

## Breaking Changes

**NONE!** 🎉

This reorganization was done so that:
- ✅ No component API changed
- ✅ Props remain the same
- ✅ Behavior is identical
- ✅ Only import paths changed

## Common Issues

### Error: Module not found

**Problem:**
```
Module not found: Can't resolve './components/primitives/Button'
```

**Solution:**
Update import to new structure:
```tsx
import { Button } from './components/foundation/Button';
```

### Error: Cannot find module '@/lib/utils'

**Problem:**
```
Cannot find module '@/lib/utils'
```

**Solution:**
```tsx
import { cn } from '@/utils';
```

### TypeScript Errors

**Problem:**
Type errors after migration

**Solution:**
1. Clear cache: `rm -rf node_modules/.cache`
2. Restart TypeScript server in VS Code
3. Rebuild: `npm run build`

## Need Help?

If you encounter problems during migration:

1. Check [Reorganization Complete](/project/reorganization/complete.md)
2. Review structure in [Reorganization Plan](/project/reorganization/plan.md)
3. Consult examples in `src/App.tsx` and `src/components/playground/`

---

## Related Documentation

- [Reorganization Plan](/project/reorganization/plan.md) - Complete reorganization plan
- [Reorganization Summary](/project/reorganization/summary.md) - Phase 1 summary
- [Reorganization Complete](/project/reorganization/complete.md) - Full completion report
- [Getting Started](/guide/getting-started) - New installation guide
- [Architecture](/guide/architecture) - System architecture

---

**Last updated**: 2026-01-28
**Version**: 0.1.1
