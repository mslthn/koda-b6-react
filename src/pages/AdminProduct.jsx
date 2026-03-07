import { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import { FiEdit3, FiSearch } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiFilterAlt } from "react-icons/bi";

const initialProducts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=80&h=80&fit=crop",
    name: "Caramel Machiato",
    price: 40000,
    desc: "Cold brewing is a method of brewing that...",
    size: ["R", "L", "XL", "250gr"],
    method: ["Deliver", "Dine In"],
    stock: 200,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=80&h=80&fit=crop",
    name: "Hazelnut Latte",
    price: 40000,
    desc: "Cold brewing is a method of brewing that...",
    size: ["R", "L", "XL", "250gr"],
    method: ["Deliver", "Dine In"],
    stock: 200,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=80&h=80&fit=crop",
    name: "Kopi Susu",
    price: 40000,
    desc: "Cold brewing is a method of brewing that...",
    size: ["R", "L", "XL", "250gr"],
    method: ["Dine In"],
    stock: 200,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=80&h=80&fit=crop",
    name: "Espresso Supreme",
    price: 40000,
    desc: "Cold brewing is a method of brewing that...",
    size: ["R", "L", "XL", "250gr"],
    method: ["Deliver"],
    stock: 200,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=80&h=80&fit=crop",
    name: "Caramel Velvet Latte",
    price: 40000,
    desc: "Cold brewing is a method of brewing that...",
    size: ["R", "L", "XL", "250gr"],
    method: ["Deliver", "Dine In"],
    stock: 200,
  },
];

const SIZE_OPTIONS = ["R", "L", "XL", "250 gr", "500gr"];
const STOCK_OPTIONS = ["50 Stock", "100 Stock", "150 Stock", "200 Stock", "500 Stock"];

const menuItems = [
  { icon: "⊞", label: "Dashboard" },
  { icon: "📦", label: "Product", active: true },
  { icon: "🛒", label: "Order" },
  { icon: "👤", label: "User" },
  { icon: "💰", label: "Keluar" },
];

function ProductModal({ mode, product, onClose, onSave }) {
  const isEdit = mode === "edit";
  const [form, setForm] = useState({
    name: isEdit ? product.name : "",
    price: isEdit ? product.price : "",
    desc: isEdit ? product.desc : "",
    sizes: isEdit ? [...product.size] : [],
    stock: isEdit ? `${product.stock} Stock` : "",
    images: isEdit
      ? [product.image, product.image, product.image]
      : [],
  });

  const toggleSize = (s) => {
    setForm((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(s)
        ? prev.sizes.filter((x) => x !== s)
        : [...prev.sizes, s],
    }));
  };

  const handleSave = () => {
    if (!form.name || !form.price) return;
    onSave({
      ...product,
      name: form.name,
      price: Number(form.price),
      desc: form.desc,
      size: form.sizes,
      stock: parseInt(form.stock) || 200,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay on left side (blurred product list) */}
      <div className="flex-1 bg-black/30 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="w-96 bg-white h-full overflow-y-auto shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 sticky top-0 bg-white z-10">
          <h2 className="font-semibold text-gray-800 text-base">
            {isEdit ? "Edit Product" : "Add Product"}
          </h2>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-red-100 text-red-500 hover:bg-red-200 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-5 flex flex-col gap-5 flex-1">
          {/* Photo */}
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-2 block">Photo Product</label>
            <div className="flex items-center gap-2 mb-2">
              {form.images.length > 0 ? (
                form.images.map((img, i) => (
                  <div key={i} className="relative w-12 h-12 rounded-lg overflow-hidden ring-1 ring-gray-200">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                    {i === form.images.length - 1 && (
                      <button className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-bl">
                        ✕
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-300 ring-1 ring-gray-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition-colors">
              Upload
            </button>
          </div>

          {/* Product Name */}
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Product name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Enter Product Name"
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400 transition-all placeholder:text-gray-300"
            />
          </div>

          {/* Price */}
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Price</label>
            <input
              type="number"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              placeholder="Enter Product Price"
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400 transition-all placeholder:text-gray-300"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Description</label>
            <textarea
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
              placeholder="Enter Product Description"
              rows={4}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400 transition-all placeholder:text-gray-300 resize-none"
            />
          </div>

          {/* Product Size */}
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-2 block">Product Size</label>
            <div className="flex flex-wrap gap-2">
              {SIZE_OPTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => toggleSize(s)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    form.sizes.includes(s)
                      ? "bg-amber-500 text-white border-amber-500 shadow-sm"
                      : "bg-white text-gray-500 border-gray-200 hover:border-amber-300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Stock */}
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Stock</label>
            <div className="relative">
              <select
                value={form.stock}
                onChange={(e) => setForm({ ...form, stock: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-300 appearance-none bg-white"
              >
                <option value="">Enter Product Stock</option>
                {STOCK_OPTIONS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▾</div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="p-5 sticky bottom-0 bg-white border-t border-gray-100">
          <button
            onClick={handleSave}
            className="w-full bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-semibold py-3 rounded-xl text-sm transition-all duration-150 shadow-md shadow-amber-200"
          >
            {isEdit ? "Edit Save" : "Save Product"}
          </button>
        </div>
      </div>
    </div>
  );
}

function DeleteConfirm({ product, onCancel, onConfirm }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-6 w-80 shadow-2xl">
        <div className="text-center mb-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl">🗑️</span>
          </div>
          <h3 className="font-semibold text-gray-800">Hapus Produk?</h3>
          <p className="text-xs text-gray-500 mt-1">
            Yakin ingin menghapus <strong>{product.name}</strong>? Tindakan ini tidak bisa dibatalkan.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition-colors"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminProduct() {
  const [activeMenu, setActiveMenu] = useState("Product");
  const [products, setProducts] = useState(initialProducts);
  const [modal, setModal] = useState(null); // null | { mode: "add" } | { mode: "edit", product }
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 9;

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSave = (updated) => {
    if (modal.mode === "edit") {
      setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    } else {
      setProducts((prev) => [...prev, { ...updated, id: Date.now() }]);
    }
  };

  const handleDelete = () => {
    setProducts((prev) => prev.filter((p) => p.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar/>
      <AdminSidebar active={activeMenu} setActive={setActiveMenu} />

      {/* Modals */}
      {modal && (
        <ProductModal
          mode={modal.mode}
          product={modal.product}
          onClose={() => setModal(null)}
          onSave={handleSave}
        />
      )}
      {deleteTarget && (
        <DeleteConfirm
          product={deleteTarget}
          onCancel={() => setDeleteTarget(null)}
          onConfirm={handleDelete}
        />
      )}

      {/* Main */}
      <main className="ml-65 pt-25 p-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-lg font-bold text-gray-800">Product List</h1>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Enter Product Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-3 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300 w-52"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <FiSearch/>
              </span>
            </div>

            {/* Filter */}
            <button className="flex items-center gap-1.5 bg-[#FF8906] hover:bg-amber-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors shadow-sm">
              <BiFilterAlt size={20}/>
              Filter
            </button>
          </div>
        </div>

        {/* Add Button */}
        <div className="mb-4">
          <button
            onClick={() => setModal({ mode: "add" })}
            className="flex items-center gap-2 bg-[#FF8906] hover:bg-amber-600 active:scale-95 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-amber-200"
          >
            <span className="text-lg leading-none">+</span> Add Product
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/60">
                <th className="w-10 px-4 py-3">
                  <input type="checkbox" className="rounded accent-amber-500" />
                </th>
                <th className="text-left text-xs text-gray-400 font-semibold py-3 px-2">Image</th>
                <th className="text-left text-xs text-gray-400 font-semibold py-3 px-2">Product Name</th>
                <th className="text-left text-xs text-gray-400 font-semibold py-3 px-2">Price</th>
                <th className="text-left text-xs text-gray-400 font-semibold py-3 px-2">Desc</th>
                <th className="text-left text-xs text-gray-400 font-semibold py-3 px-2">Product Size</th>
                <th className="text-left text-xs text-gray-400 font-semibold py-3 px-2">Method</th>
                <th className="text-left text-xs text-gray-400 font-semibold py-3 px-2">Stock</th>
                <th className="text-left text-xs text-gray-400 font-semibold py-3 px-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr
                  key={p.id}
                  className="border-b border-gray-50 hover:bg-amber-50/30 transition-colors"
                >
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selected.includes(p.id)}
                      onChange={() => toggleSelect(p.id)}
                      className="rounded accent-amber-500"
                    />
                  </td>
                  <td className="py-3 px-2">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-10 h-10 rounded-xl object-cover ring-1 ring-gray-200"
                    />
                  </td>
                  <td className="py-3 px-2">
                    <span className="font-medium text-gray-700 text-xs">{p.name}</span>
                  </td>
                  <td className="py-3 px-2 text-xs text-gray-600">
                    IDR {p.price.toLocaleString("id-ID")}
                  </td>
                  <td className="py-3 px-2 text-xs text-gray-400 max-w-[120px] truncate">
                    {p.desc}
                  </td>
                  <td className="py-3 px-2 text-xs text-gray-500">
                    {p.size.join(", ")}
                  </td>
                  <td className="py-3 px-2 text-xs text-gray-500">
                    {p.method.join(", ")}
                  </td>
                  <td className="py-3 px-2 text-xs text-gray-600 font-medium">{p.stock}</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setModal({ mode: "edit", product: p })}
                        className="w-7 h-7 flex items-center justify-center rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 transition-colors"
                        title="Edit"
                      >
                        <FiEdit3/>
                      </button>
                      <button
                        onClick={() => setDeleteTarget(p)}
                        className="w-7 h-7 flex items-center justify-center rounded-lg bg-red-100 text-red-500 hover:bg-red-200 transition-colors"
                        title="Delete"
                      >
                        <FaRegTrashAlt/>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-gray-400 text-sm">
                    Produk tidak ditemukan
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Footer */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              Show {filtered.length} product of 100 product
            </p>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="px-2.5 py-1 text-xs rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setCurrentPage(n)}
                  className={`w-7 h-7 text-xs rounded-lg transition-colors ${
                    currentPage === n
                      ? "bg-amber-500 text-white font-semibold"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="px-2.5 py-1 text-xs rounded-lg text-amber-500 font-semibold hover:bg-amber-50 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
