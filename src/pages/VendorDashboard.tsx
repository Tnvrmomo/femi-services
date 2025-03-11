
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, Package, Calendar, DollarSign, User, Settings, 
  Star, TrendingUp, LogOut, Plus, ChevronDown, Bell
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const VendorDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Mock data for dashboard statistics
  const stats = [
    { title: 'Total Earnings', value: '৳45,320', icon: DollarSign, change: '+12%', color: 'bg-rose-50 text-rose-500' },
    { title: 'Appointments', value: '128', icon: Calendar, change: '+8%', color: 'bg-lavender-50 text-lavender-600' },
    { title: 'Services', value: '24', icon: Package, change: '+2', color: 'bg-gold-50 text-gold-600' },
    { title: 'Reviews', value: '4.8', icon: Star, change: '+0.2', color: 'bg-cream-100 text-rose-600' },
  ];
  
  // Mock data for recent appointments
  const recentAppointments = [
    { id: 1, customer: 'Fatima Ahmed', service: 'Bridal Makeup', date: '2023-10-15', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, customer: 'Nurul Islam', service: 'Birthday Cake', date: '2023-10-16', time: '2:00 PM', status: 'Pending' },
    { id: 3, customer: 'Sarah Khan', service: 'Party Makeup', date: '2023-10-18', time: '5:30 PM', status: 'Confirmed' },
    { id: 4, customer: 'Aisha Rahman', service: 'Henna Design', date: '2023-10-20', time: '11:00 AM', status: 'Cancelled' },
  ];
  
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 hidden md:block bg-white border-r border-muted">
        <div className="p-4 border-b border-muted">
          <Link to="/" className="flex items-center">
            <h1 className="font-serif text-xl font-bold bg-gradient-to-r from-rose-600 to-lavender-600 bg-clip-text text-transparent">
              Femi<span className="text-gold-500">Services</span>
            </h1>
          </Link>
        </div>
        
        <nav className="p-4 space-y-1">
          <button 
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'dashboard' 
                ? 'bg-rose-50 text-rose-600' 
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard className="h-5 w-5" />
            <span>Dashboard</span>
          </button>
          
          <button 
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'services' 
                ? 'bg-rose-50 text-rose-600' 
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
            onClick={() => setActiveTab('services')}
          >
            <Package className="h-5 w-5" />
            <span>Services</span>
          </button>
          
          <button 
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'appointments' 
                ? 'bg-rose-50 text-rose-600' 
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
            onClick={() => setActiveTab('appointments')}
          >
            <Calendar className="h-5 w-5" />
            <span>Appointments</span>
          </button>
          
          <button 
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'earnings' 
                ? 'bg-rose-50 text-rose-600' 
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
            onClick={() => setActiveTab('earnings')}
          >
            <DollarSign className="h-5 w-5" />
            <span>Earnings</span>
          </button>
          
          <button 
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'profile' 
                ? 'bg-rose-50 text-rose-600' 
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            <User className="h-5 w-5" />
            <span>Profile</span>
          </button>
          
          <button 
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'settings' 
                ? 'bg-rose-50 text-rose-600' 
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </button>
        </nav>
        
        <div className="absolute bottom-0 p-4 w-64 border-t border-muted">
          <Link to="/">
            <Button variant="outline" className="w-full flex items-center space-x-2 justify-center">
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </Link>
        </div>
      </aside>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="h-16 border-b border-muted flex items-center justify-between px-6">
          <div className="flex md:hidden items-center">
            <h1 className="font-serif text-xl font-bold bg-gradient-to-r from-rose-600 to-lavender-600 bg-clip-text text-transparent">
              Femi<span className="text-gold-500">Services</span>
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-rose-500"></span>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
                      alt="User" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="hidden sm:inline-block">Glamour Studio</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <User className="h-4 w-4 mr-2" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="h-4 w-4 mr-2" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="h-4 w-4 mr-2" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-muted/30">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-medium">Dashboard</h1>
            <Button className="bg-gradient-to-r from-rose-500 to-lavender-500 hover:from-rose-600 hover:to-lavender-600 rounded-full">
              <Plus className="h-4 w-4 mr-2" />
              Add New Service
            </Button>
          </div>
          
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">{stat.title}</p>
                    <h3 className="text-2xl font-semibold">{stat.value}</h3>
                  </div>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-xs">
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  <span className="text-green-500 font-medium">{stat.change}</span>
                  <span className="text-muted-foreground ml-1">vs last month</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Recent Appointments */}
          <div className="bg-white rounded-xl shadow-soft overflow-hidden mb-8">
            <div className="p-6 border-b border-muted">
              <h2 className="text-lg font-medium">Recent Appointments</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-muted">
                <thead className="bg-muted/30">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Customer
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Service
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-muted">
                  {recentAppointments.map((appointment) => (
                    <tr key={appointment.id} className="hover:bg-muted/10 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium">{appointment.customer}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {appointment.service}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>{new Date(appointment.date).toLocaleDateString()}</div>
                        <div className="text-sm text-muted-foreground">{appointment.time}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          appointment.status === 'Confirmed' 
                            ? 'bg-green-50 text-green-600' 
                            : appointment.status === 'Pending'
                            ? 'bg-yellow-50 text-yellow-600'
                            : 'bg-red-50 text-red-600'
                        }`}>
                          {appointment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                        <Button variant="ghost" className="text-rose-600 hover:text-rose-700 hover:bg-rose-50">
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-muted text-center">
              <Button variant="ghost" className="text-rose-600 hover:text-rose-700 hover:bg-rose-50">
                View All Appointments
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VendorDashboard;
