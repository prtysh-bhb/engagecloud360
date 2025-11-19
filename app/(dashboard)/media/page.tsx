import { Search, Filter, Plus, Image as ImageIcon, Video, Music, Grid3x3, List, Download, Trash2, Tag } from 'lucide-react'

export default function MediaPage() {
  const mediaItems = [
    { id: 1, type: 'image', name: 'product-hero.jpg', size: '1.2 MB', dimensions: '1920x1080', tags: ['product', 'hero'] },
    { id: 2, type: 'video', name: 'demo-video.mp4', size: '45 MB', dimensions: '1920x1080', tags: ['demo', 'marketing'] },
    { id: 3, type: 'image', name: 'team-photo.jpg', size: '3.4 MB', dimensions: '2400x1600', tags: ['team', 'about'] },
    { id: 4, type: 'image', name: 'logo-variations.svg', size: '128 KB', dimensions: 'Vector', tags: ['brand', 'logo'] },
    { id: 5, type: 'video', name: 'testimonial-1.mp4', size: '23 MB', dimensions: '1920x1080', tags: ['testimonial'] },
    { id: 6, type: 'image', name: 'social-banner.png', size: '890 KB', dimensions: '1200x628', tags: ['social', 'banner'] },
  ]

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Media Management</h1>
          <p className="text-slate-600 mt-1">Organize and manage your media assets</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          <Plus size={20} />
          <span>Upload Media</span>
        </button>
      </div>

      {/* Toolbar */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search media..."
                className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 w-80"
              />
            </div>
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <Filter size={20} />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 bg-primary-100 text-primary-600 rounded-lg text-sm font-medium">All</button>
            <button className="px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg text-sm font-medium">Images</button>
            <button className="px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg text-sm font-medium">Videos</button>
            <div className="border-l border-slate-200 pl-2 ml-2">
              <button className="p-2 bg-primary-100 text-primary-600 rounded-lg">
                <Grid3x3 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Total Assets</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">1,247</p>
            </div>
            <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center">
              <ImageIcon size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Images</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">934</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
              <ImageIcon size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Videos</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">267</p>
            </div>
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
              <Video size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Storage Used</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">24.5 GB</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
              <ImageIcon size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Media Grid */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mediaItems.map((item) => (
            <div key={item.id} className="group relative">
              <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  {item.type === 'image' ? (
                    <ImageIcon size={48} className="text-slate-400" />
                  ) : (
                    <Video size={48} className="text-slate-400" />
                  )}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 bg-white text-slate-900 rounded-lg hover:bg-slate-100">
                      <Download size={16} />
                    </button>
                    <button className="p-2 bg-white text-slate-900 rounded-lg hover:bg-slate-100">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <p className="font-medium text-slate-900 text-sm truncate">{item.name}</p>
                <p className="text-xs text-slate-500">{item.size} • {item.dimensions}</p>
                <div className="flex items-center space-x-1 mt-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
