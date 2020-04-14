import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  Stack,
  SettingToggle,
  TextField,
  TextStyle,
} from '@shopify/polaris';

const AnnotatedLayout = () => {
  const [discount, setDiscount] = React.useState('10%');

  const [toggle, setToggle] = React.useState(false);
  const handleChange = React.useCallback(
    (newValue) => setDiscount(newValue),
    []
  );
  const handleToggle = React.useCallback(
    () => setToggle((toggle) => !toggle),
    []
  );

  const handleSubmit = () => {
    console.log('submission', discount);
  };

  const contentStatus = toggle ? 'Disable' : 'Enable';
  const textStatus = toggle ? 'Enabled' : 'Disabled';

  return (
    <Page>
      <Layout>
        <Layout.AnnotatedSection
          title='Default discount'
          description='Add a product to Sample App, it will automatically be discounted.'
        >
          <Card sectioned>
            <Form onSubmit={handleSubmit}>
              <FormLayout>
                <TextField
                  value={discount}
                  onChange={handleChange}
                  label='Discount percentage'
                  type='discount'
                />
                <Stack distribution='trailing'>
                  <Button primary submit>
                    Save
                  </Button>
                </Stack>
              </FormLayout>
            </Form>
          </Card>
        </Layout.AnnotatedSection>
        <Layout.AnnotatedSection
          title='Price updates'
          description='Temporarily disable all Sample App price updates'
        >
          <SettingToggle
            action={{
              content: contentStatus,
              onAction: handleToggle,
            }}
            enabled={toggle}
          >
            This setting is{' '}
            <TextStyle variation='strong'>{textStatus}</TextStyle>.
          </SettingToggle>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  );
};

export default AnnotatedLayout;
