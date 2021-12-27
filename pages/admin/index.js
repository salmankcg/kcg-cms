import Layout from '../../components/admin/layout'
function AdminHome({ children }) {
    return (
        <Layout>
            {children}
        </Layout>
    );
}

export default AdminHome;