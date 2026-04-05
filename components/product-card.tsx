"use client";

import Image from "next/image";
import { Product } from "@/lib/data";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "./ui/button";
import { Check, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-card">
      <div className="relative h-48 bg-muted overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover ${product.category === "chicken" ? "object-top" : "object-center"}`}
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-lg text-foreground line-clamp-1">
            {product.name}
          </h3>
          <Badge variant={product.inStock ? "default" : "secondary"}>
            {product.inStock ? "Available" : "Out of Stock"}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.features?.slice(0, 2).map((feature) => (
            <span
              key={feature}
              className="text-xs bg-accent/10 text-black/80 px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
          {product.features && product.features.length > 2 && (
            <span className="text-xs text-muted-foreground px-2 py-1">
              +{product.features.length - 2} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            {product.priceDisplay ? product.priceDisplay : `₱${product.price.toFixed(2)}`}
          </span>
          <Dialog>
            <DialogTrigger 
              className={buttonVariants({ size: "sm" })} 
              disabled={!product.inStock}
            >
              {product.inStock ? "View Details" : "Unavailable"}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md w-11/12">
              <DialogHeader>
                <DialogTitle>{product.name}</DialogTitle>
                <DialogDescription className="capitalize">
                  {product.category} Product
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="relative h-48 sm:h-64 rounded-md overflow-hidden bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`object-cover ${product.category === "chicken" ? "object-top" : "object-center"}`}
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Description</h4>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </div>
                {product.features && product.features.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Details</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2 pt-4 border-t border-border gap-2">
                  <span className="font-semibold text-lg">Current Price</span>
                  <span className="text-xl font-bold text-primary">
                    {product.priceDisplay
                      ? product.priceDisplay
                      : `₱${product.price.toFixed(2)}`}
                  </span>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
