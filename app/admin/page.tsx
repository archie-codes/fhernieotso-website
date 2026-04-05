"use client";

import { useState } from "react";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  products as initialProducts,
  Product,
  getContactMessages,
  updateMessageStatus,
  deleteContactMessage,
} from "@/lib/data";
import { Trash2, Edit2, Plus, MessageSquare, TrashIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminPage() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"products" | "messages">(
    "products",
  );
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [messages, setMessages] = useState(getContactMessages());
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "eggs",
    inStock: true,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleMessageStatusChange = (
    id: string,
    status: "new" | "read" | "replied",
  ) => {
    updateMessageStatus(id, status);
    setMessages(getContactMessages());
    toast({
      title: "Message Updated",
      description: "The message status has been updated.",
    });
  };

  const handleDeleteMessage = (id: string) => {
    deleteContactMessage(id);
    setMessages(getContactMessages());
    toast({
      title: "Message Deleted",
      description: "The message has been removed.",
    });
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setProducts(
        products.map((p) =>
          p.id === editingId
            ? {
                ...p,
                name: formData.name,
                description: formData.description,
                price: parseFloat(formData.price),
                category: formData.category as any,
                inStock: formData.inStock,
              }
            : p,
        ),
      );
      toast({
        title: "Product Updated",
        description: "The product has been updated successfully.",
      });
      setEditingId(null);
    } else {
      const newProduct: Product = {
        id: Date.now().toString(),
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        category: formData.category as any,
        image: "/products/new.jpg",
        features: [],
        inStock: formData.inStock,
      };
      setProducts([...products, newProduct]);
      toast({
        title: "Product Added",
        description: "The new product has been added successfully.",
      });
    }
    resetForm();
  };

  const handleEditProduct = (product: Product) => {
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      category: product.category,
      inStock: product.inStock,
    });
    setEditingId(product.id);
    setShowForm(true);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
    toast({
      title: "Product Deleted",
      description: "The product has been removed.",
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "eggs",
      inStock: true,
    });
    setShowForm(false);
    setEditingId(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Admin Header */}
      <section className="bg-linear-to-r from-green-700 to-green-600 pt-32 pb-8 shadow-inner relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-green-500 rounded-full blur-3xl opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <h1 className="text-3xl md:text-4xl font-bold drop-shadow-sm">Admin Dashboard</h1>
          <p className="text-green-50 font-medium drop-shadow-sm mt-2">Manage products and messages</p>
        </div>
      </section>

      {/* Admin Content */}
      <section className="flex-1 py-8 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === "products"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-muted"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("messages")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                activeTab === "messages"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-muted"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              Messages ({messages.filter((m) => m.status === "new").length})
            </button>
          </div>

          {/* Products Tab */}
          {activeTab === "products" && (
            <div>
              {/* Add Product Form */}
              {showForm && (
                <Card className="p-8 mb-8 bg-background">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    {editingId ? "Edit Product" : "Add New Product"}
                  </h2>
                  <form onSubmit={handleAddProduct} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Product Name
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Price
                        </label>
                        <Input
                          type="number"
                          name="price"
                          step="0.01"
                          value={formData.price}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Category
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                        >
                          <option value="eggs">Eggs</option>
                          <option value="chicken">Chicken</option>
                          <option value="turkey">Turkey</option>
                          <option value="specialty">Specialty</option>
                        </select>
                      </div>
                      <div className="flex items-end">
                        <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                          <input
                            type="checkbox"
                            name="inStock"
                            checked={formData.inStock}
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          In Stock
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Description
                      </label>
                      <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        rows={4}
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" size="lg">
                        {editingId ? "Update Product" : "Add Product"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={resetForm}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </Card>
              )}

              {/* Add Product Button */}
              {!showForm && (
                <button
                  onClick={() => setShowForm(true)}
                  className="mb-8 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Product
                </button>
              )}

              {/* Products List */}
              <div className="space-y-4">
                {products.map((product) => (
                  <Card
                    key={product.id}
                    className="p-6 bg-background flex items-start justify-between hover:shadow-md transition-shadow"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-foreground">
                          {product.name}
                        </h3>
                        <Badge
                          variant={product.inStock ? "default" : "secondary"}
                        >
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        {product.description}
                      </p>
                      <div className="flex gap-4 text-sm">
                        <span className="text-foreground font-semibold">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-muted-foreground capitalize">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleEditProduct(product)}
                        className="p-2 hover:bg-muted rounded-lg transition-colors text-primary"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="p-2 hover:bg-muted rounded-lg transition-colors text-destructive"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === "messages" && (
            <div className="space-y-4">
              {messages.length === 0 ? (
                <Card className="p-8 bg-background text-center">
                  <p className="text-muted-foreground">No messages yet.</p>
                </Card>
              ) : (
                messages.map((message) => (
                  <Card
                    key={message.id}
                    className={`p-6 bg-background flex items-start justify-between ${
                      message.status === "new"
                        ? "border-l-4 border-primary"
                        : ""
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">
                            {message.subject}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            From: {message.name} ({message.email})
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Phone: {message.phone}
                          </p>
                        </div>
                        {message.status === "new" && <Badge>New</Badge>}
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {message.message}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">
                          {new Date(message.createdAt).toLocaleDateString()}
                        </p>
                        <select
                          value={message.status}
                          onChange={(e) =>
                            handleMessageStatusChange(
                              message.id,
                              e.target.value as any,
                            )
                          }
                          className="text-xs px-2 py-1 border border-border rounded bg-background text-foreground"
                        >
                          <option value="new">New</option>
                          <option value="read">Read</option>
                          <option value="replied">Replied</option>
                        </select>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteMessage(message.id)}
                      className="p-2 hover:bg-muted rounded-lg transition-colors text-destructive ml-4 shrink-0"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </Card>
                ))
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
