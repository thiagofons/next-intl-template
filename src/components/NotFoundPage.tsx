import { useTranslations } from 'next-intl';
import PageLayout from './PageLayout';

/** Page rendered when 404 error is triggered. */
export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <PageLayout title={t("title")}>
      <p className="max-w-[460px]">{t('description')}</p>
    </PageLayout>
  );
}
