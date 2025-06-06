import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Layout from './components/ui/Layout';
import DashboardAdmin from './components/admin/DashboardAdmin';
import AdminLayout from './components/admin/AdminLayout';
import UsersAdmin from './components/admin/UsersAdmin';
import PlacesAdmin from './components/admin/PlacesAdmin';

import IndexPage from './pages/IndexPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import PlacesPage from './pages/PlacesPage';
import BookingsPage from './pages/BookingsPage';
import PlacesFormPage from './pages/PlacesFormPage';
import PlacePage from './pages/PlacePage';
import SingleBookedPlace from './pages/SingleBookedPlace';
import NotFoundPage from './pages/NotFoundPage';

import { UserProvider } from './providers/UserProvider';
import { PlaceProvider } from './providers/PlaceProvider';
import axiosInstance from './utils/axios';
import { getItemFromLocalStorage } from './utils';

import AdminProtectedRoute from './components/admin/AdminProtectRoute'; // <-- your protected route

function App() {
  useEffect(() => {
    axiosInstance.defaults.headers.common['Authorization'] =
      `Bearer ${getItemFromLocalStorage('token')}`;
  }, []);

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <UserProvider>
        <PlaceProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<IndexPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="account" element={<ProfilePage />} />
              <Route path="account/places" element={<PlacesPage />} />
              <Route path="account/places/new" element={<PlacesFormPage />} />
              <Route path="account/places/:id" element={<PlacesFormPage />} />
              <Route path="place/:id" element={<PlacePage />} />
              <Route path="account/bookings" element={<BookingsPage />} />
              <Route
                path="account/bookings/:id"
                element={<SingleBookedPlace />}
              />

              {/* ✅ Admin Routes Corrected */}
              <Route element={<AdminProtectedRoute />}>
                <Route path="admin" element={<AdminLayout />}>
                  <Route index element={<DashboardAdmin />} />
                  <Route path="users" element={<UsersAdmin />} />
                  <Route path="places" element={<PlacesAdmin />} />
                </Route>
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>

          <ToastContainer autoClose={2000} transition={Slide} />
        </PlaceProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
