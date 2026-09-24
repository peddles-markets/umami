import { Button, Icon, useTheme } from '@umami/react-zen';
import { Moon, Sun } from '@/components/icons';

/**
 * One-click light/dark, in the sidebar footer.
 *
 * Umami exposes the theme only under Settings → Preferences, three levels deep. The product puts
 * it within reach, so this does too. It is a TOGGLE rather than the three-way selector because the
 * footer has room for one control, and `system` is still available on the settings page for anyone
 * who wants it.
 *
 * The icon shows the theme you would switch TO, not the one you are in — the usual convention, and
 * the label says so out loud for anyone reading it with a screen reader.
 */
export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <Button
      variant="zero"
      onPress={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      style={{ padding: 0 }}
    >
      <Icon strokeColor="muted">{theme === 'dark' ? <Sun /> : <Moon />}</Icon>
    </Button>
  );
}
