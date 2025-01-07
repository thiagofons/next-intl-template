import BaseLayout from '@/components/BaseLayout';
import NotFoundPage from '@/components/NotFoundPage';
import { routing } from '@/i18n/routing';

/** Rendered when user tries to navigate to a route that doesn't exist. */
export default function GlobalNotFound() {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <NotFoundPage />
    </BaseLayout>
  );
}
