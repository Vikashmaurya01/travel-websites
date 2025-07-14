"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
 
} from "@/components/ui/navigation-menu";



export function MainNavigationMenu() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[100px] lg:grid-cols-1">
              <ListItem href="/docs" title="Home 1">
               
              </ListItem>
              <ListItem href="/docs/installation" title="Home 2">
                
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Home 3">
                
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Destinations</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[140px] lg:grid-cols-1">
              <ListItem href="/docs" title="Destinations 1">
               
              </ListItem>
              <ListItem href="/docs/installation" title="Destinations-2">
                
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Destinations 3">
                
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Moliva Tours</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[140px] lg:grid-cols-1">
              <ListItem href="/docs" title="Tour packages 1">
               
              </ListItem>
              <ListItem href="/docs/installation" title="Tour packages-2">
                
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Tour packages-3">
                
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Travel Insight</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[140px] lg:grid-cols-1">
              <ListItem href="/docs" title="Post list">
               
              </ListItem>
              <ListItem href="/docs/installation" title="Single post">
                
              </ListItem>
              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      
        
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
