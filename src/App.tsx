import { Button } from './components/primitives/Button';
import { Input } from './components/primitives/Input';
import { Badge } from './components/primitives/Badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './components/layout/Card';

export function App() {
  return (
    <div className="min-h-screen bg-bg-secondary p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <h1 className="text-3xl font-bold text-text-primary">
          ClickMax Design System
        </h1>

        {/* Buttons Section */}
        <Card>
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>
              Different button styles for various actions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="link">Link</Button>
            </div>
          </CardContent>
        </Card>

        {/* Button Sizes */}
        <Card>
          <CardHeader>
            <CardTitle>Button Sizes</CardTitle>
            <CardDescription>Buttons come in different sizes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>

        {/* Badges Section */}
        <Card>
          <CardHeader>
            <CardTitle>Badge Variants</CardTitle>
            <CardDescription>Status indicators and labels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Badge>Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="secondary">Secondary</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle>Input Fields</CardTitle>
            <CardDescription>Form input components</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="max-w-md space-y-4">
              <Input label="Name" placeholder="Enter your name" />
              <Input
                label="Email"
                type="email"
                placeholder="your@email.com"
                description="We'll never share your email."
              />
              <Input
                label="Password"
                type="password"
                error="Password must be at least 8 characters"
              />
              <Input label="Disabled" disabled placeholder="Can't edit this" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="primary">Submit</Button>
            <Button variant="ghost">Cancel</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
