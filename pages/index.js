import { EmptyState, Page, Layout } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const index = () => {
  const [open, setOpen] = React.useState(false);

  const handleSelection = (resource) => {
    setOpen(false);
    const idsFromResources = resources.selection.map((product) => product.id);

    console.log(idsFromResources);
  };

  return (
    <Page>
      <TitleBar
        primaryAction={{
          content: 'Select Products',
        }}
      />
      <ResourcePicker
        resourceType='Product'
        showVariants={false}
        open={open}
        onSelection={(resources) => handleSelection(resources)}
        onCancel={() => setOpen(false)}
      />
      <Layout>
        <EmptyState
          heading='Discount your products temporarily'
          action={{
            content: 'Select products',
            onAction: () => setOpen(true),
          }}
          image={img}
        >
          <p>Select products to change their price -temporarily.</p>
        </EmptyState>
      </Layout>
    </Page>
  );
};
export default index;
