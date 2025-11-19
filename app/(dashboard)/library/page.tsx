import { Search, Filter, Plus, Folder, File, Download, Trash2, MoreVertical, Grid3x3, List } from 'lucide-react'

export default function LibraryPage() {
  const folders = [
    { name: 'Marketing Materials', files: 45, lastModified: '2 days ago' },
    { name: 'Legal Documents', files: 23, lastModified: '1 week ago' },
    { name: 'Product Specs', files: 67, lastModified: '3 days ago' },
    { name: 'Client Contracts', files: 34, lastModified: '5 days ago' },
  ]

  const recentFiles = [
    { name: 'Q4_Marketing_Report.pdf', size: '2.4 MB', modified: '1 hour ago', type: 'PDF' },
    { name: 'Brand_Guidelines_2024.docx', size: '1.8 MB', modified: '3 hours ago', type: 'DOC' },
    { name: 'Product_Roadmap.xlsx', size: '856 KB', modified: '1 day ago', type: 'XLS' },
    { name: 'Privacy_Policy.pdf', size: '1.2 MB', modified: '2 days ago', type: 'PDF' },
    { name: 'Terms_of_Service.pdf', size: '980 KB', modified: '3 days ago', type: 'PDF' },
  ]

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Library</h1>
          <p className="text-slate-600 mt-1">Manage and organize your documents</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          <Plus size={20} />
          <span>Upload Files</span>
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
                placeholder="Search files and folders..."
                className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 w-80"
              />
            </div>
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <Filter size={20} />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <Grid3x3 size={20} />
            </button>
            <button className="p-2 bg-primary-100 text-primary-600 rounded-lg">
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Folders Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Folders</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {folders.map((folder, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 hover:shadow-md transition-shadow cursor-pointer group">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center">
                  <Folder size={24} />
                </div>
                <button className="opacity-0 group-hover:opacity-100 p-1 text-slate-600 hover:bg-slate-100 rounded">
                  <MoreVertical size={16} />
                </button>
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{folder.name}</h3>
              <p className="text-sm text-slate-500">{folder.files} files</p>
              <p className="text-xs text-slate-400 mt-2">Modified {folder.lastModified}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Files */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Recent Files</h2>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left p-4 text-sm font-semibold text-slate-700">Name</th>
                  <th className="text-left p-4 text-sm font-semibold text-slate-700">Type</th>
                  <th className="text-left p-4 text-sm font-semibold text-slate-700">Size</th>
                  <th className="text-left p-4 text-sm font-semibold text-slate-700">Modified</th>
                  <th className="text-right p-4 text-sm font-semibold text-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentFiles.map((file, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                          <File size={20} className="text-slate-600" />
                        </div>
                        <span className="font-medium text-slate-900">{file.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm font-medium">
                        {file.type}
                      </span>
                    </td>
                    <td className="p-4 text-slate-600">{file.size}</td>
                    <td className="p-4 text-slate-600">{file.modified}</td>
                    <td className="p-4">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                          <Download size={16} />
                        </button>
                        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                          <Trash2 size={16} />
                        </button>
                        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
