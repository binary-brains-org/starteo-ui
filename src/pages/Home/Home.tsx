import { Section, UserPage } from '@/layout';
import { CardProject } from '@/components';
import { Stylesheet } from '@/utils';
import { CaseAddProject } from './CaseAddProject';
import { CaseLastProject } from './CaseLastProject';

const Home = () => {
  return (
    <UserPage>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between p-4 gap-4">
          <CaseLastProject />

          <CaseAddProject />
        </div>

        <Section
          className="inline-flex gap-2"
          title="Recent last week projects"
          containerSx={styles.scrollableSection}
        >
          {Array(10).fill(<CardProject />)}
        </Section>

        <Section
          className="inline-flex gap-2"
          title="Your recent donated projects"
          containerSx={styles.scrollableSection}
        >
          {Array(10).fill(<CardProject />)}
        </Section>
      </div>
    </UserPage>
  );
};

const styles = Stylesheet({
  scrollableSection: {
    padding: '.8rem 0',
    overflowX: 'auto',
    overflowY: 'hidden',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export { Home };
