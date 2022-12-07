import { Toaster } from 'react-hot-toast';

import { CarDetails } from '@pages/CarDetails';
import { Sider } from '@components/Sider';
import { Layout } from '@layouts/Layout';
import { HomeIcon } from '@assets/icons/HomeIcon';
import { CrmIcon } from '@assets/icons/CrmIcon';
import { SubscriptionIcon } from '@assets/icons/SubscriptionIcon';
import { PartnersIcon } from '@assets/icons/PartnersIcon';
import { TfoIcon } from '@assets/icons/TfoIcon';
import { FinanceIcon } from '@assets/icons/FinanceIcon';
import { InventoryIcon } from '@assets/icons/InventoryIcon';
import { MarketingIcon } from '@assets/icons/MarketingIcon';
import { UserManagementIcon } from '@assets/icons/UserManagementIcon';

export function App() {
  return (
    <Layout>
      <Toaster />
      <Sider
        selectedItemKey="home"
        items={[
          { key: 'home', label: 'Home', Icon: HomeIcon },
          { key: 'crm', label: 'CRM', Icon: CrmIcon },
          {
            key: 'subscriptions',
            label: 'Subscriptions',
            Icon: SubscriptionIcon,
          },
          { key: 'partners', label: 'Partners', Icon: PartnersIcon },
          { key: 'tfo', label: 'TFO', Icon: TfoIcon },
          { key: 'finance', label: 'Finance', Icon: FinanceIcon },
          { key: 'inventory', label: 'Inventory', Icon: InventoryIcon },
          { key: 'marketing', label: 'Marketing', Icon: MarketingIcon },
          {
            key: 'userManagement',
            label: 'User Management',
            Icon: UserManagementIcon,
          },
        ]}
      />
      <CarDetails />
    </Layout>
  );
}
