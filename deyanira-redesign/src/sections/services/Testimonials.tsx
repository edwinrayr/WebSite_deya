import { PlayCircle, MessageCircle, Quote, Star } from 'lucide-react';

export const Testimonials = () => {
    const whatsappChats = [
        { name: "Adriana G.", text: "Deya, ¡ya abrí mi primera cuenta regulada! No puedo creer lo fácil que fue.", color: "bg-green-50" },
        { name: "Carlos R.", text: "Por fin entiendo a dónde se iba mi dinero. Mi fondo de paz ya está creciendo.", color: "bg-blue-50" }
    ];

    return (
        <section className="py-24 bg-gray-50/50 relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

                {/* Encabezado de la sección */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-space-cadet mb-4">
                        Historias de <span className="text-lapis-lazuli">Éxito Real</span>
                    </h2>
                    <div className="flex justify-center gap-1 text-sea-serpent mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                    </div>
                    <p className="text-gray-500 font-medium">Ellos ya dieron el paso hacia una vida financiera con propósito.</p>
                </div>

                {/* Grid de Videos (Los 2 protagonistas) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">

                    {/* Video 1 */}
                    <div className="group relative rounded-[3rem] overflow-hidden shadow-2xl bg-space-cadet aspect-video lg:aspect-auto lg:h-[450px] cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop"
                            alt="Testimonio Video 1"
                            className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur-md p-6 rounded-full group-hover:bg-sea-serpent transition-all duration-500">
                                <PlayCircle className="text-white" size={60} strokeWidth={1.5} />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-space-cadet to-transparent">
                            <p className="text-white font-bold text-xl italic">"La mejor inversión que he hecho para mi futuro."</p>
                            <span className="text-sea-serpent font-black text-sm tracking-widest uppercase mt-2 block">Ver testimonio completo</span>
                        </div>
                    </div>

                    {/* Video 2 */}
                    <div className="group relative rounded-[3rem] overflow-hidden shadow-2xl bg-space-cadet aspect-video lg:aspect-auto lg:h-[450px] cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                            alt="Testimonio Video 2"
                            className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur-md p-6 rounded-full group-hover:bg-sea-serpent transition-all duration-500">
                                <PlayCircle className="text-white" size={60} strokeWidth={1.5} />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-space-cadet to-transparent">
                            <p className="text-white font-bold text-xl italic">"Dejé de tener miedo a mis estados de cuenta."</p>
                            <span className="text-sea-serpent font-black text-sm tracking-widest uppercase mt-2 block">Ver testimonio completo</span>
                        </div>
                    </div>

                </div>

                {/* WhatsApp Evidence (Debajo de los videos para soporte) */}
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    {whatsappChats.map((chat, i) => (
                        <div key={i} className={`${chat.color} p-6 rounded-[2rem] rounded-tl-none border border-black/5 shadow-sm max-w-md relative`}>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-green-500">
                                    <MessageCircle size={16} fill="currentColor" />
                                </div>
                                <span className="font-bold text-space-cadet text-sm">{chat.name}</span>
                            </div>
                            <p className="text-gray-600 text-sm italic">"{chat.text}"</p>
                            <Quote className="absolute top-4 right-4 text-black/5" size={30} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};