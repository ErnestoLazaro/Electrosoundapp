import image_a90e8109f6eb7b42db84094f21c52b168e93eda1 from 'figma:asset/a90e8109f6eb7b42db84094f21c52b168e93eda1.png';
import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AlbumCard } from './components/AlbumCard';
import { MobileMenu } from './components/MobileMenu';
import { Cart } from './components/Cart';
import { UserProfile } from './components/UserProfile';
import { Footer } from './components/Footer';
import { toast, Toaster } from 'sonner';

// Import images from Figma
import imgPortadaRebel from "figma:asset/b91c8a16c702c27e8ec6850e7f1aec116ddb7018.png";
import imgPortadaRebel1 from "figma:asset/3a280275f02c918ed47831e7f4ce14e00f089e31.png";
import imgPortadaRebel2 from "figma:asset/3594e76b4244e3900566e76fdf9cc2c76e392ee5.png";
import imgPortadaRebel3 from "figma:asset/c98f99a78aa414d733b822c006d9082ec1831142.png";

interface CartItem {
  id: string;
  title: string;
  artist: string;
  price: number;
  image: string;
  quantity: number;
}

const albums = [
  {
    id: '1',
    title: 'Rebel Empire',
    artist: 'Movimiento Máquina',
    description: 'International Brotherhood of Machines - EBM clásico con beats poderosos y vocales distorsionadas',
    price: 16,
    image: imgPortadaRebel,
  },
  {
    id: '2',
    title: 'Formato Negativo',
    artist: 'Dark Synthesis',
    description: 'Distorted vocals, melodic synths and powerful beats - Una fusión única de industrial y melodía',
    price: 18,
    image: imgPortadaRebel1,
  },
  {
    id: '3',
    title: 'Christ Under',
    artist: 'Encrypted Minds',
    description: 'The first single from the upcoming debut album "Encrypted Minds" - Techno industrial oscuro',
    price: 15,
    image: imgPortadaRebel2,
  },
  {
    id: '4',
    title: 'Brigadier',
    artist: 'War Machine',
    description: 'With a war theme and a powerful sound full of beats and melodies - Épico y energético',
    price: 17,
    image: imgPortadaRebel3,
  },
  {
    id: '5',
    title: 'Neon Pulse',
    artist: 'Cyber Revolution',
    description: 'Synthwave meets industrial - Un viaje sonoro a través del futuro distópico',
    price: 19,
    image: imgPortadaRebel,
  },
  {
    id: '6',
    title: 'Digital Storm',
    artist: 'Techno Warriors',
    description: 'Hard techno con influencias EBM - Para los amantes del sonido más duro',
    price: 16,
    image: imgPortadaRebel1,
  },
  {
    id: '7',
    title: 'Voltage Dreams',
    artist: 'Electric Souls',
    description: 'Electro experimental con toques melódicos - Innovación en cada track',
    price: 20,
    image: imgPortadaRebel2,
  },
  {
    id: '8',
    title: 'Machine Code',
    artist: 'Binary Beats',
    description: 'Minimal techno oscuro - Hipnótico y profundo, perfecto para sets largos',
    price: 18,
    image: imgPortadaRebel3,
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [userProfileOpen, setUserProfileOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Mock user data
  const userData = {
    name: 'DJ CyberNova',
    avatar: image_a90e8109f6eb7b42db84094f21c52b168e93eda1,
    favoriteGenres: ['EBM', 'Industrial', 'Techno', 'Synthwave'],
    purchasedAlbums: [
      {
        id: '1',
        title: 'Rebel Empire',
        artist: 'Movimiento Máquina',
        image: imgPortadaRebel,
        purchaseDate: '15 Dic 2024',
      },
      {
        id: '2',
        title: 'Formato Negativo',
        artist: 'Dark Synthesis',
        image: imgPortadaRebel1,
        purchaseDate: '28 Nov 2024',
      },
      {
        id: '4',
        title: 'Brigadier',
        artist: 'War Machine',
        image: imgPortadaRebel3,
        purchaseDate: '10 Oct 2024',
      },
    ],
  };

  const handleAddToCart = (album: typeof albums[0]) => {
    const existingItem = cartItems.find(item => item.id === album.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === album.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
      toast.success('Cantidad actualizada en el carrito');
    } else {
      setCartItems([...cartItems, { ...album, quantity: 1 }]);
      toast.success('Álbum agregado al carrito');
    }
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast.info('Álbum eliminado del carrito');
  };

  const handleCheckout = () => {
    toast.success('¡Redirigiendo al checkout!');
    // Here you would implement the checkout flow
  };

  const handlePlayPreview = (title: string) => {
    toast.info(`Reproduciendo preview de \"${title}\"`);
    // Here you would implement audio playback
  };

  const handleLogout = () => {
    setUserProfileOpen(false);
    toast.success('Sesión cerrada correctamente');
    // Here you would implement logout logic
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Toaster 
        theme="dark" 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1f2937',
            color: '#fff',
            border: '1px solid rgba(139, 92, 246, 0.3)',
          },
        }}
      />
      
      <Header 
        onMenuClick={() => setMenuOpen(true)}
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setCartOpen(true)}
        onUserClick={() => setUserProfileOpen(true)}
      />
      
      <MobileMenu 
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
      
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <UserProfile
        isOpen={userProfileOpen}
        onClose={() => setUserProfileOpen(false)}
        userName={userData.name}
        userAvatar={userData.avatar}
        favoriteGenres={userData.favoriteGenres}
        purchasedAlbums={userData.purchasedAlbums}
        onLogout={handleLogout}
      />

      <main id="home">
        <Hero />

        {/* Albums Section */}
        <section id="catalogo-premium" className="container mx-auto px-4 py-16">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Catálogo <span className="text-[#eff6b2]">Premium</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Descubre nuestra selección exclusiva de música electrónica. Cada álbum es una experiencia sonora única.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {albums.map((album) => (
              <AlbumCard
                key={album.id}
                title={album.title}
                artist={album.artist}
                description={album.description}
                price={album.price}
                image={album.image}
                onBuyClick={() => handleAddToCart(album)}
                onPlayClick={() => handlePlayPreview(album.title)}
              />
            ))}
          </div>
        </section>

        {/* Featured Artists Section */}
        <section id="artists" className="relative py-20 overflow-hidden">
          {/* Background effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-black" />
          
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Artistas <span className="text-[#eff6b2]">Destacados</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Conoce a los productores que están definiendo el sonido del futuro
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Movimiento Máquina', 'Dark Synthesis', 'Encrypted Minds', 'War Machine'].map((artist, index) => (
                <div
                  key={artist}
                  className="group relative aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={albums[index].image}
                    alt={artist}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg">{artist}</h3>
                    <p className="text-gray-400 text-sm mt-1">EBM • Industrial</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-3xl overflow-hidden border border-purple-500/20 p-8 md:p-12">
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Únete a la Revolución
              </h2>
              <p className="text-gray-300 mb-8">
                Suscríbete y recibe las últimas novedades, lanzamientos exclusivos y ofertas especiales
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-6 py-4 bg-black/50 border border-purple-500/30 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 active:scale-95 whitespace-nowrap">
                  Suscribirse
                </button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}