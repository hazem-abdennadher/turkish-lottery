import { AuthGuard } from '@/context/admin-context';
import { ModalContextProvider } from '@/context/modal-context';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthGuard>
      <ModalContextProvider>{children}</ModalContextProvider>
    </AuthGuard>
  );
};

export default AdminLayout;
