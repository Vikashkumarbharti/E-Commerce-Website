import React, { useState } from 'react';
import {
  Building,
  Plus,
  Search,
  Edit2,
  Trash2,
  Eye,
  MessageSquare,
  Calendar,
  Lock,
  LogOut,
  CheckCircle2,
  Clock,
  MapPin,
  ExternalLink,
  Shield,
  TrendingUp,
  DollarSign,
  Sparkles,
  Users,
  ChevronRight,
  Filter,
  Check,
  X
} from 'lucide-react';
import { Property, InquiryRecord, TourRecord } from '../types';
import { BrandLogo } from './BrandLogo';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  properties: Property[];
  onAddProperty: () => void;
  onEditProperty: (property: Property) => void;
  onDeleteProperty: (propertyId: string) => void;
  onViewPropertyDetails: (property: Property) => void;
  inquiries: InquiryRecord[];
  onUpdateInquiryStatus: (id: string, status: 'new' | 'contacted' | 'closed') => void;
  tours: TourRecord[];
  onUpdateTourStatus: (id: string, status: 'upcoming' | 'completed' | 'cancelled') => void;
  adminUsername: string;
  onLogout: () => void;
  currentPasswordHash: string;
  onChangePassword: (newPassword: string) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  properties,
  onAddProperty,
  onEditProperty,
  onDeleteProperty,
  onViewPropertyDetails,
  inquiries,
  onUpdateInquiryStatus,
  tours,
  onUpdateTourStatus,
  adminUsername,
  onLogout,
  currentPasswordHash,
  onChangePassword
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'properties' | 'inquiries' | 'tours' | 'security'>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Rent' | 'Sale'>('All');
  
  // Password change state
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Delete confirmation modal state
  const [deletingPropertyId, setDeletingPropertyId] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredProperties = properties.filter((prop) => {
    const matchesSearch =
      prop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prop.location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prop.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || prop.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');

    if (oldPass !== currentPasswordHash) {
      setPasswordError('Current password is incorrect.');
      return;
    }

    if (newPass.length < 4) {
      setPasswordError('New password must be at least 4 characters long.');
      return;
    }

    if (newPass !== confirmPass) {
      setPasswordError('New password and confirmation do not match.');
      return;
    }

    onChangePassword(newPass);
    setPasswordSuccess('Admin password successfully updated!');
    setOldPass('');
    setNewPass('');
    setConfirmPass('');
  };

  const totalRentals = properties.filter((p) => p.status === 'Rent').length;
  const totalSales = properties.filter((p) => p.status === 'Sale').length;
  const newInquiriesCount = inquiries.filter((i) => i.status === 'new').length;
  const upcomingToursCount = tours.filter((t) => t.status === 'upcoming').length;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex flex-col">
      
      {/* Top Admin Navigation Header */}
      <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-30 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <BrandLogo size="md" />
          <div className="h-5 w-px bg-slate-700 hidden sm:block" />
          <div className="hidden sm:flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold border border-indigo-500/30">
              Admin Portal
            </span>
            <span className="text-xs text-slate-400">
              Signed in as <strong className="text-white">{adminUsername}</strong>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Live Site</span>
          </button>

          <button
            onClick={onLogout}
            className="px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white text-xs font-bold border border-rose-500/20 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main Admin Body Container */}
      <div className="flex-1 flex flex-col lg:flex-row bg-[#F8FAFF] overflow-hidden">
        
        {/* Sidebar Nav */}
        <aside className="w-full lg:w-64 bg-white border-b lg:border-b-0 lg:border-r border-slate-200/80 p-4 lg:p-6 flex lg:flex-col justify-between flex-shrink-0">
          <div className="w-full space-y-1 sm:space-y-1.5 flex lg:flex-col overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
              }`}
            >
              <TrendingUp className="w-4 h-4 flex-shrink-0" />
              <span>Overview Metrics</span>
            </button>

            <button
              onClick={() => setActiveTab('properties')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'properties'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <Building className="w-4 h-4 flex-shrink-0" />
                <span>Properties ({properties.length})</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('inquiries')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'inquiries'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                <span>Inquiries</span>
              </div>
              {newInquiriesCount > 0 && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  activeTab === 'inquiries' ? 'bg-white text-indigo-600' : 'bg-indigo-100 text-indigo-700'
                }`}>
                  {newInquiriesCount} new
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('tours')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'tours'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span>Tours & Visits</span>
              </div>
              {upcomingToursCount > 0 && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  activeTab === 'tours' ? 'bg-white text-indigo-600' : 'bg-emerald-100 text-emerald-700'
                }`}>
                  {upcomingToursCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('security')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'security'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
              }`}
            >
              <Lock className="w-4 h-4 flex-shrink-0" />
              <span>Password & Security</span>
            </button>
          </div>

          {/* User badge at bottom of sidebar on desktop */}
          <div className="hidden lg:block pt-4 border-t border-slate-100 mt-auto">
            <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-2xl">
              <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                AD
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900">{adminUsername}</p>
                <p className="text-[11px] text-slate-500">Super Administrator</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Dynamic Content Panel */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 max-w-7xl">
          
          {/* TAB 1: OVERVIEW METRICS */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-indigo-950 tracking-tight">
                    Executive Dashboard
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Real-time performance metrics and inventory status.
                  </p>
                </div>

                <button
                  onClick={onAddProperty}
                  className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-200 flex items-center gap-2 self-start cursor-pointer transition-all active:scale-98"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Property</span>
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-xs">
                  <div className="flex items-center justify-between text-slate-500 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider">Total Listings</span>
                    <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <Building className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-extrabold text-indigo-950">{properties.length}</div>
                  <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                    <span className="text-emerald-600 font-semibold">{totalRentals} Rent</span>
                    <span>•</span>
                    <span className="text-indigo-600 font-semibold">{totalSales} Sale</span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-xs">
                  <div className="flex items-center justify-between text-slate-500 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider">Client Inquiries</span>
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-extrabold text-indigo-950">{inquiries.length}</div>
                  <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                    <span className="text-amber-600 font-semibold">{newInquiriesCount} Pending Action</span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-xs">
                  <div className="flex items-center justify-between text-slate-500 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider">Tours Scheduled</span>
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                      <Calendar className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-extrabold text-indigo-950">{tours.length}</div>
                  <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                    <span className="text-purple-600 font-semibold">{upcomingToursCount} Upcoming</span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-xs">
                  <div className="flex items-center justify-between text-slate-500 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider">Avg Rent Rate</span>
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <DollarSign className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-3xl font-extrabold text-indigo-950">
                    ${Math.round(
                      properties
                        .filter((p) => p.status === 'Rent')
                        .reduce((acc, curr) => acc + curr.price, 0) / (totalRentals || 1)
                    ).toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-500 mt-2">Per Month Average</div>
                </div>
              </div>

              {/* Quick Actions & Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Recent Inquiries Card */}
                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-indigo-950">Recent Client Inquiries</h3>
                    <button
                      onClick={() => setActiveTab('inquiries')}
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 cursor-pointer"
                    >
                      <span>View All</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {inquiries.slice(0, 3).map((inq) => (
                      <div
                        key={inq.id}
                        className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3"
                      >
                        <div className="min-w-0">
                          <h4 className="text-xs font-bold text-indigo-950 truncate">{inq.fullName}</h4>
                          <p className="text-[11px] text-slate-500 truncate">{inq.propertyName || 'General Inquiry'}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">{inq.email} • {inq.phone}</p>
                        </div>
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase ${
                          inq.status === 'new'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : inq.status === 'contacted'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}>
                          {inq.status}
                        </span>
                      </div>
                    ))}
                    {inquiries.length === 0 && (
                      <p className="text-xs text-slate-400 py-4 text-center">No inquiries submitted yet.</p>
                    )}
                  </div>
                </div>

                {/* Recent Tours Card */}
                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-indigo-950">Upcoming Scheduled Tours</h3>
                    <button
                      onClick={() => setActiveTab('tours')}
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 cursor-pointer"
                    >
                      <span>View All</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {tours.slice(0, 3).map((tour) => (
                      <div
                        key={tour.id}
                        className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="text-xs font-bold text-indigo-950 truncate">{tour.fullName}</h4>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-semibold">
                              {tour.tourType}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 truncate">{tour.propertyName}</p>
                          <p className="text-[10px] text-indigo-600 font-semibold mt-0.5">
                            📅 {tour.date} at {tour.timeSlot}
                          </p>
                        </div>
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase ${
                          tour.status === 'upcoming'
                            ? 'bg-purple-50 text-purple-700 border border-purple-200'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {tour.status}
                        </span>
                      </div>
                    ))}
                    {tours.length === 0 && (
                      <p className="text-xs text-slate-400 py-4 text-center">No tours scheduled yet.</p>
                    )}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: PROPERTIES MANAGEMENT */}
          {activeTab === 'properties' && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-indigo-950 tracking-tight">
                    Properties Database ({properties.length})
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Create, update, or remove real estate listings across the portfolio.
                  </p>
                </div>

                <button
                  onClick={onAddProperty}
                  className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-200 flex items-center gap-2 self-start cursor-pointer transition-all active:scale-98"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Property Listing</span>
                </button>
              </div>

              {/* Filter & Search Bar */}
              <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by title, city, or property type..."
                    className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex rounded-xl bg-slate-100 p-1">
                    {(['All', 'Rent', 'Sale'] as const).map((st) => (
                      <button
                        key={st}
                        onClick={() => setStatusFilter(st)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          statusFilter === st
                            ? 'bg-white text-indigo-600 shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Data Table */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-600">
                    <thead className="bg-slate-50/80 border-b border-slate-100 text-[11px] font-bold uppercase text-slate-500">
                      <tr>
                        <th className="py-3.5 px-4">Property</th>
                        <th className="py-3.5 px-4">Status & Type</th>
                        <th className="py-3.5 px-4">Price</th>
                        <th className="py-3.5 px-4">Specs</th>
                        <th className="py-3.5 px-4">Featured</th>
                        <th className="py-3.5 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredProperties.map((prop) => (
                        <tr key={prop.id} className="hover:bg-slate-50/60 transition-colors">
                          
                          {/* Property Info */}
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={prop.mainImage}
                                alt={prop.name}
                                className="w-14 h-11 rounded-xl object-cover flex-shrink-0"
                              />
                              <div className="min-w-0">
                                <h4 className="font-bold text-indigo-950 truncate max-w-xs">{prop.name}</h4>
                                <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                                  <MapPin className="w-3 h-3 text-indigo-600" />
                                  <span>{prop.location.city}, {prop.location.state}</span>
                                </div>
                              </div>
                            </div>
                          </td>

                          {/* Status & Type */}
                          <td className="py-3.5 px-4">
                            <div className="space-y-1">
                              <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${
                                prop.status === 'Rent'
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                  : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                              }`}>
                                For {prop.status}
                              </span>
                              <div className="text-[11px] text-slate-500">{prop.type}</div>
                            </div>
                          </td>

                          {/* Price */}
                          <td className="py-3.5 px-4">
                            <div className="font-bold text-indigo-950 text-sm">
                              ${prop.price.toLocaleString()}
                            </div>
                            <div className="text-[10px] text-slate-400">{prop.pricePeriod}</div>
                          </td>

                          {/* Specs */}
                          <td className="py-3.5 px-4">
                            <div className="text-[11px] text-slate-700 font-medium">
                              {prop.specs.beds} Beds • {prop.specs.baths} Baths
                            </div>
                            <div className="text-[10px] text-slate-400">{prop.specs.sqft.toLocaleString()} sqft</div>
                          </td>

                          {/* Featured toggle badge */}
                          <td className="py-3.5 px-4">
                            {prop.featured ? (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold">
                                <Sparkles className="w-3 h-3" />
                                Featured
                              </span>
                            ) : (
                              <span className="text-[11px] text-slate-400">Standard</span>
                            )}
                          </td>

                          {/* Actions */}
                          <td className="py-3.5 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => onViewPropertyDetails(prop)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors cursor-pointer"
                                title="View live details"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              
                              <button
                                onClick={() => onEditProperty(prop)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors cursor-pointer"
                                title="Edit listing"
                              >
                                <Edit2 className="w-4 h-4" />
                              </button>

                              <button
                                onClick={() => setDeletingPropertyId(prop.id)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                                title="Delete listing"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {filteredProperties.length === 0 && (
                  <div className="py-12 text-center text-slate-400">
                    <p className="text-sm font-semibold">No properties matched your search filters.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: INQUIRIES MANAGEMENT */}
          {activeTab === 'inquiries' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-indigo-950 tracking-tight">
                  Lead & Inquiry Inbox ({inquiries.length})
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Review tenant requests, purchase questions, and broker messages.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {inquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-xs flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-base font-bold text-indigo-950">{inq.fullName}</h4>
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase ${
                          inq.status === 'new'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : inq.status === 'contacted'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}>
                          {inq.status}
                        </span>
                        <span className="text-xs text-slate-400">Received {inq.createdAt}</span>
                      </div>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
                        <span><strong>Property:</strong> {inq.propertyName || 'General Inquiry'}</span>
                        <span><strong>Email:</strong> <a href={`mailto:${inq.email}`} className="text-indigo-600 hover:underline">{inq.email}</a></span>
                        <span><strong>Phone:</strong> <a href={`tel:${inq.phone}`} className="text-indigo-600 hover:underline">{inq.phone || 'N/A'}</a></span>
                        {inq.moveInDate && <span><strong>Target Date:</strong> {inq.moveInDate}</span>}
                      </div>

                      <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-700 leading-relaxed mt-2">
                        "{inq.message}"
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center gap-2 flex-shrink-0">
                      <select
                        value={inq.status}
                        onChange={(e) => onUpdateInquiryStatus(inq.id, e.target.value as any)}
                        className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 cursor-pointer focus:ring-2 focus:ring-indigo-600"
                      >
                        <option value="new">Mark: New</option>
                        <option value="contacted">Mark: Contacted</option>
                        <option value="closed">Mark: Closed</option>
                      </select>
                    </div>
                  </div>
                ))}

                {inquiries.length === 0 && (
                  <div className="bg-white rounded-3xl p-12 text-center border border-slate-100">
                    <MessageSquare className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                    <p className="text-sm font-bold text-indigo-950">No Inquiries Found</p>
                    <p className="text-xs text-slate-400 mt-1">
                      Customer questions submitted via property cards will appear here.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: TOURS & VISITS */}
          {activeTab === 'tours' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-indigo-950 tracking-tight">
                  Scheduled Visits & Tours ({tours.length})
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Manage confirmed in-person walkthroughs and live video tours.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {tours.map((tour) => (
                  <div
                    key={tour.id}
                    className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-xs flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-base font-bold text-indigo-950">{tour.fullName}</h4>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 uppercase">
                          {tour.tourType} Tour
                        </span>
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase ${
                          tour.status === 'upcoming'
                            ? 'bg-purple-50 text-purple-700 border border-purple-200'
                            : tour.status === 'completed'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {tour.status}
                        </span>
                      </div>

                      <div className="p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs font-semibold text-indigo-950 flex items-center gap-3">
                        <span>🗓️ <strong>Date:</strong> {tour.date}</span>
                        <span>⏰ <strong>Time:</strong> {tour.timeSlot}</span>
                        <span>📍 <strong>Listing:</strong> {tour.propertyName}</span>
                      </div>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
                        <span><strong>Client Email:</strong> <a href={`mailto:${tour.email}`} className="text-indigo-600 hover:underline">{tour.email}</a></span>
                        <span><strong>Client Phone:</strong> <a href={`tel:${tour.phone}`} className="text-indigo-600 hover:underline">{tour.phone || 'N/A'}</a></span>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center gap-2 flex-shrink-0">
                      <select
                        value={tour.status}
                        onChange={(e) => onUpdateTourStatus(tour.id, e.target.value as any)}
                        className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 cursor-pointer focus:ring-2 focus:ring-indigo-600"
                      >
                        <option value="upcoming">Mark: Upcoming</option>
                        <option value="completed">Mark: Completed</option>
                        <option value="cancelled">Mark: Cancelled</option>
                      </select>
                    </div>
                  </div>
                ))}

                {tours.length === 0 && (
                  <div className="bg-white rounded-3xl p-12 text-center border border-slate-100">
                    <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                    <p className="text-sm font-bold text-indigo-950">No Tour Bookings</p>
                    <p className="text-xs text-slate-400 mt-1">
                      Client appointment requests will appear here.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 5: PASSWORD & SECURITY */}
          {activeTab === 'security' && (
            <div className="max-w-xl space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-indigo-950 tracking-tight">
                  Admin Credentials & Security
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Update your administrator password or review login configurations.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs space-y-6">
                
                {/* Active Credentials Summary */}
                <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider">Active Admin Profile</span>
                    <h4 className="text-sm font-bold text-indigo-950 mt-0.5">{adminUsername} (Super Admin)</h4>
                    <p className="text-xs text-slate-500">Current Password: <code className="font-mono bg-white px-1.5 py-0.5 rounded text-indigo-700 font-bold">{currentPasswordHash}</code></p>
                  </div>
                  <Shield className="w-8 h-8 text-indigo-600" />
                </div>

                {passwordSuccess && (
                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{passwordSuccess}</span>
                  </div>
                )}

                {passwordError && (
                  <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-600 flex-shrink-0" />
                    <span>{passwordError}</span>
                  </div>
                )}

                {/* Change Password Form */}
                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Current Password
                    </label>
                    <input
                      type="password"
                      required
                      value={oldPass}
                      onChange={(e) => setOldPass(e.target.value)}
                      placeholder="Enter current password..."
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      New Admin Password
                    </label>
                    <input
                      type="password"
                      required
                      value={newPass}
                      onChange={(e) => setNewPass(e.target.value)}
                      placeholder="Enter new password (min 4 characters)..."
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      required
                      value={confirmPass}
                      onChange={(e) => setConfirmPass(e.target.value)}
                      placeholder="Confirm new password..."
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-200 transition-all cursor-pointer"
                  >
                    Update Admin Password
                  </button>
                </form>

              </div>
            </div>
          )}

        </main>
      </div>

      {/* Delete Confirmation Modal */}
      {deletingPropertyId && (
        <div className="fixed inset-0 z-60 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 border border-slate-100 shadow-2xl text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-indigo-950">Delete Property Listing?</h4>
              <p className="text-xs text-slate-500 mt-1">
                This will permanently remove the property from the live database and search listings.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setDeletingPropertyId(null)}
                className="flex-1 py-2.5 rounded-full border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onDeleteProperty(deletingPropertyId);
                  setDeletingPropertyId(null);
                }}
                className="flex-1 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold cursor-pointer"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
