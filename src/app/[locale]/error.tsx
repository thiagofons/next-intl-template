'use client';

import PageLayout from '@/components/PageLayout';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

type Props = {
  error: Error;
  reset(): void;
};

/** Renders if an error in the browser is triggered. */
export default function Error({error, reset}: Props) {
  const t = useTranslations('Error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageLayout>
      <div>
        {t.rich('description', {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          retry: (chunks) => (
            <button
              className="text-white underline underline-offset-2"
              onClick={reset}
              type="button"
            >
              {chunks}
            </button>
          )
        })}
      </div>
    </PageLayout>
  );
}
