import React, { useState, useEffect } from 'react';
import { Property, SearchFilterState, InquiryFormData, TourBookingData, ToastMessage, InquiryRecord, TourRecord } from './types';
import { PROPERTIES } from './data/properties';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustFeatures } from './components/TrustFeatures';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FeaturedProperties } from './components/FeaturedProperties';
import { ListingsSection } from './components/ListingsSection';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { GetStartedModal } from './components/GetStartedModal';
import { BlogModal, ServicesModal, AboutModal } from './components/InfoModals';
import { ToastContainer } from './components/Toast';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AdminPanel } from './components/AdminPanel';
import { PropertyFormModal } from './components/PropertyFormModal';

const INITIAL_INQUIRIES: InquiryRecord[] = [
  {
    id: 'inq-1',
    propertyId: 'prop-1',
    propertyName: 'The Lumina Sky Penthouse',
    fullName: 'Alexander Wright',
    email: 'a.wright@vanguard.io',
    phone: '+1 (555) 438-9921',
    message: 'Looking to schedule a private walkthrough this Friday afternoon for my executive relocation.',
    moveInDate: '2026-09-15',
    createdAt: 'Today, 09:30 AM',
    status: 'new'
  },
  {
    id: 'inq-2',
    propertyId: 'prop-2',
    propertyName: 'Azure Horizon Beachfront Villa',
    fullName: 'Sophia Martinez',
    email: 'sophia.m@luxuryestate.com',
    phone: '+1 (555) 892-3341',
    message: 'Interested in the lease terms and HOA guidelines regarding yacht dockage.',
    moveInDate: '2026-10-01',
    createdAt: 'Yesterday, 04:15 PM',
    status: 'contacted'
  },
  {
    id: 'inq-3',
    propertyId: 'prop-4',
    propertyName: 'The Glass Pavilion at Beverly Hills',
    fullName: 'Jonathan Sterling',
    email: 'j.sterling@sterlingcap.com',
    phone: '+1 (555) 234-7711',
    message: 'Please send over the floor plans and appraisal valuation packet.',
    createdAt: '2 days ago',
    status: 'closed'
  }
];

const INITIAL_TOURS: TourRecord[] = [
  {
    id: 'tour-1',
    propertyId: 'prop-1',
    propertyName: 'The Lumina Sky Penthouse',
    fullName: 'Elena Rostova',
    email: 'elena.rostova@globalventures.com',
    phone: '+1 (555) 781-2290',
    date: '2026-08-25',
    timeSlot: '10:00 AM',
    tourType: 'in-person',
    createdAt: 'Aug 18, 2026',
    status: 'upcoming'
  },
  {
    id: 'tour-2',
    propertyId: 'prop-3',
    propertyName: 'The Grand Mercer Brownstone',
    fullName: 'Marcus Vance',
    email: 'marcus.v@nycrealty.org',
    phone: '+1 (555) 349-1100',
    date: '2026-08-27',
    timeSlot: '02:00 PM',
    tourType: 'video',
    createdAt: 'Aug 17, 2026',
    status: 'upcoming'
  }
];

export default function App() {
  const [properties, setProperties] = useState<Property[]>(() => {
    try {
      const saved = localStorage.getItem('nestora_properties');
      return saved ? JSON.parse(saved) : PROPERTIES;
    } catch {
      return PROPERTIES;
    }
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('nestora_favorites');
      return saved ? JSON.parse(saved) : ['prop-1'];
    } catch {
      return ['prop-1'];
    }
  });

  // Admin state
  const [adminPassword, setAdminPassword] = useState<string>(() => {
    try {
      return localStorage.getItem('nestora_admin_password') || 'admin123';
    } catch {
      return 'admin123';
    }
  });
  const [adminUsername] = useState<string>('admin');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem('nestora_admin_session') === 'true';
    } catch {
      return false;
    }
  });
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [propertyModalState, setPropertyModalState] = useState<{
    isOpen: boolean;
    editingProperty: Property | null;
  }>({
    isOpen: false,
    editingProperty: null
  });

  // Inquiries and Tours management
  const [inquiries, setInquiries] = useState<InquiryRecord[]>(() => {
    try {
      const saved = localStorage.getItem('nestora_inquiries');
      return saved ? JSON.parse(saved) : INITIAL_INQUIRIES;
    } catch {
      return INITIAL_INQUIRIES;
    }
  });

  const [tours, setTours] = useState<TourRecord[]>(() => {
    try {
      const saved = localStorage.getItem('nestora_tours');
      return saved ? JSON.parse(saved) : INITIAL_TOURS;
    } catch {
      return INITIAL_TOURS;
    }
  });

  const [filters, setFilters] = useState<SearchFilterState>({
    location: '',
    propertyType: '',
    priceRange: '',
    beds: 'any',
    listingStatus: 'All',
    searchQuery: '',
    sortBy: 'featured'
  });

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Persist properties
  useEffect(() => {
    try {
      localStorage.setItem('nestora_properties', JSON.stringify(properties));
    } catch (e) {
      console.error(e);
    }
  }, [properties]);

  // Persist favorites
  useEffect(() => {
    try {
      localStorage.setItem('nestora_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  // Persist inquiries
  useEffect(() => {
    try {
      localStorage.setItem('nestora_inquiries', JSON.stringify(inquiries));
    } catch (e) {
      console.error(e);
    }
  }, [inquiries]);

  // Persist tours
  useEffect(() => {
    try {
      localStorage.setItem('nestora_tours', JSON.stringify(tours));
    } catch (e) {
      console.error(e);
    }
  }, [tours]);

  // Persist admin session
  useEffect(() => {
    try {
      localStorage.setItem('nestora_admin_session', isAdminLoggedIn ? 'true' : 'false');
    } catch (e) {
      console.error(e);
    }
  }, [isAdminLoggedIn]);

  // Persist admin password
  useEffect(() => {
    try {
      localStorage.setItem('nestora_admin_password', adminPassword);
    } catch (e) {
      console.error(e);
    }
  }, [adminPassword]);

  const addToast = (title: string, description?: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, title, description, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleToggleFavorite = (property: Property) => {
    setFavorites((prev) => {
      const exists = prev.includes(property.id);
      if (exists) {
        addToast('Removed from Wishlist', `${property.name} was removed from your favorites.`, 'info');
        return prev.filter((id) => id !== property.id);
      } else {
        addToast('Saved to Wishlist', `${property.name} added to your favorites!`, 'success');
        return [...prev, property.id];
      }
    });
  };

  const handleFilterChange = (key: keyof SearchFilterState, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
      location: '',
      propertyType: '',
      priceRange: '',
      beds: 'any',
      listingStatus: 'All',
      searchQuery: '',
      sortBy: 'featured'
    });
    addToast('Filters Reset', 'All property filters restored to default.', 'info');
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handlePerformHeroSearch = () => {
    handleNavigate('listings');
    addToast('Search Applied', 'Listings updated according to your selected criteria.', 'info');
  };

  const handleSubmitInquiry = (data: InquiryFormData) => {
    const newInquiry: InquiryRecord = {
      ...data,
      id: `inq-${Date.now()}`,
      createdAt: 'Just now',
      status: 'new'
    };
    setInquiries((prev) => [newInquiry, ...prev]);

    addToast(
      'Inquiry Sent',
      `Thank you ${data.fullName}, our senior advisor will contact you regarding ${data.propertyName}.`,
      'success'
    );
  };

  const handleBookTour = (data: TourBookingData) => {
    const newTour: TourRecord = {
      ...data,
      id: `tour-${Date.now()}`,
      createdAt: 'Just now',
      status: 'upcoming'
    };
    setTours((prev) => [newTour, ...prev]);

    addToast(
      'Tour Scheduled!',
      `${data.tourType === 'video' ? 'Video' : 'In-person'} visit booked for ${data.date} at ${data.timeSlot}.`,
      'success'
    );
  };

  const handleSubscribeNewsletter = (email: string) => {
    addToast('Subscribed!', `Exclusive property alerts will be sent to ${email}.`, 'success');
  };

  // Admin Handlers
  const handleAdminLoginSuccess = (user: string) => {
    setIsAdminLoggedIn(true);
    setIsAdminPanelOpen(true);
    addToast('Welcome Administrator', `Successfully signed in as ${user}.`, 'success');
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    setIsAdminPanelOpen(false);
    addToast('Signed Out', 'Administrator session ended.', 'info');
  };

  const handleSaveProperty = (propertyData: Property) => {
    setProperties((prev) => {
      const existsIndex = prev.findIndex((p) => p.id === propertyData.id);
      if (existsIndex >= 0) {
        const updated = [...prev];
        updated[existsIndex] = propertyData;
        addToast('Property Updated', `${propertyData.name} has been updated in the database.`, 'success');
        return updated;
      } else {
        addToast('Property Published', `${propertyData.name} added to portfolio listings.`, 'success');
        return [propertyData, ...prev];
      }
    });
  };

  const handleDeleteProperty = (propertyId: string) => {
    const propToDelete = properties.find((p) => p.id === propertyId);
    setProperties((prev) => prev.filter((p) => p.id !== propertyId));
    setFavorites((prev) => prev.filter((id) => id !== propertyId));
    addToast('Property Deleted', `${propToDelete?.name || 'Property'} was removed from database.`, 'info');
  };

  const handleUpdateInquiryStatus = (id: string, status: 'new' | 'contacted' | 'closed') => {
    setInquiries((prev) =>
      prev.map((inq) => (inq.id === id ? { ...inq, status } : inq))
    );
    addToast('Inquiry Updated', `Status changed to ${status}.`, 'info');
  };

  const handleUpdateTourStatus = (id: string, status: 'upcoming' | 'completed' | 'cancelled') => {
    setTours((prev) =>
      prev.map((tour) => (tour.id === id ? { ...tour, status } : tour))
    );
    addToast('Tour Updated', `Booking status changed to ${status}.`, 'info');
  };

  const handleChangeAdminPassword = (newPass: string) => {
    setAdminPassword(newPass);
    addToast('Password Changed', 'Administrator access password updated successfully.', 'success');
  };

  const handleOpenAdmin = () => {
    if (isAdminLoggedIn) {
      setIsAdminPanelOpen(true);
    } else {
      setIsAdminLoginOpen(true);
    }
  };

  const favoriteProperties = properties.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFF] selection:bg-indigo-600 selection:text-white">
      {/* Toast Notification Layer */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />

      {/* Main Sticky Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenGetStarted={() => setIsGetStartedOpen(true)}
        onOpenBlog={() => setIsBlogOpen(true)}
        onOpenServices={() => setIsServicesOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenAdmin={handleOpenAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* 1. Hero with Floating Search Panel */}
        <Hero
          filters={filters}
          onFilterChange={handleFilterChange}
          onPerformSearch={handlePerformHeroSearch}
        />

        {/* 2. Trust Feature Cards */}
        <TrustFeatures />

        {/* 3. Why Choose Us (Two Columns) */}
        <WhyChooseUs onOpenLearnMore={() => setIsAboutOpen(true)} />

        {/* 4. Featured Properties (3 Cards Matching Reference) */}
        <FeaturedProperties
          properties={properties}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onViewAll={() => handleNavigate('listings')}
        />

        {/* 5. Complete Listings with Dynamic Filtering */}
        <ListingsSection
          properties={properties}
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
        />

        {/* 6. How It Works (3 Steps) */}
        <HowItWorks />

        {/* 7. Client Testimonials */}
        <Testimonials />

        {/* 8. Full-Width CTA Banner */}
        <CtaSection onGetStarted={() => setIsGetStartedOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBlog={() => setIsBlogOpen(true)}
        onOpenServices={() => setIsServicesOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenContact={() => setIsGetStartedOpen(true)}
        onOpenAdmin={handleOpenAdmin}
        onSubscribeNewsletter={handleSubscribeNewsletter}
      />

      {/* Property Details Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        isOpen={Boolean(selectedProperty)}
        onClose={() => setSelectedProperty(null)}
        isFavorite={selectedProperty ? favorites.includes(selectedProperty.id) : false}
        onToggleFavorite={handleToggleFavorite}
        onSubmitInquiry={handleSubmitInquiry}
        onBookTour={handleBookTour}
      />

      {/* Favorites Wishlist Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favoriteProperties}
        onRemoveFavorite={(id) => {
          setFavorites((prev) => prev.filter((pId) => pId !== id));
          addToast('Removed', 'Property removed from wishlist.', 'info');
        }}
        onSelectProperty={(prop) => {
          setSelectedProperty(prop);
        }}
        onClearAll={() => {
          setFavorites([]);
          addToast('Cleared', 'Wishlist cleared.', 'info');
        }}
      />

      {/* Get Started / Match Modal */}
      <GetStartedModal
        isOpen={isGetStartedOpen}
        onClose={() => setIsGetStartedOpen(false)}
        onSuccess={(msg) => addToast('Application Sent', msg, 'success')}
      />

      {/* Blog / Insights Modal */}
      <BlogModal isOpen={isBlogOpen} onClose={() => setIsBlogOpen(false)} />

      {/* Services Modal */}
      <ServicesModal
        isOpen={isServicesOpen}
        onClose={() => setIsServicesOpen(false)}
        onSelectService={(serviceName) => {
          setIsGetStartedOpen(true);
          addToast('Selected Service', `Inquiring about ${serviceName}`, 'info');
        }}
      />

      {/* About Us Modal */}
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />

      {/* Admin Login Modal */}
      <AdminLoginModal
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        onLoginSuccess={handleAdminLoginSuccess}
        currentPasswordHash={adminPassword}
      />

      {/* Admin Panel Full Management Portal */}
      <AdminPanel
        isOpen={isAdminPanelOpen}
        onClose={() => setIsAdminPanelOpen(false)}
        properties={properties}
        onAddProperty={() => setPropertyModalState({ isOpen: true, editingProperty: null })}
        onEditProperty={(prop) => setPropertyModalState({ isOpen: true, editingProperty: prop })}
        onDeleteProperty={handleDeleteProperty}
        onViewPropertyDetails={(prop) => {
          setIsAdminPanelOpen(false);
          setSelectedProperty(prop);
        }}
        inquiries={inquiries}
        onUpdateInquiryStatus={handleUpdateInquiryStatus}
        tours={tours}
        onUpdateTourStatus={handleUpdateTourStatus}
        adminUsername={adminUsername}
        onLogout={handleAdminLogout}
        currentPasswordHash={adminPassword}
        onChangePassword={handleChangeAdminPassword}
      />

      {/* Property Add/Edit Form Modal */}
      <PropertyFormModal
        isOpen={propertyModalState.isOpen}
        onClose={() => setPropertyModalState({ isOpen: false, editingProperty: null })}
        onSave={handleSaveProperty}
        initialProperty={propertyModalState.editingProperty}
      />
    </div>
  );
}

