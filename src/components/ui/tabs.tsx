// src/components/ui/tabs.tsx
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(function TabsList(
  { className, ...props }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
  ref: React.ForwardedRef<React.ElementRef<typeof TabsPrimitive.List>>
) {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className
      )}
      {...props}
    />
  )
})
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(function TabsTrigger(
  { className, ...props }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
  ref: React.ForwardedRef<React.ElementRef<typeof TabsPrimitive.Trigger>>
) {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium",
        className
      )}
      {...props}
    />
  )
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(function TabsContent(
  { className, ...props }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>,
  ref: React.ForwardedRef<React.ElementRef<typeof TabsPrimitive.Content>>
) {
  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn("mt-2", className)}
      {...props}
    />
  )
})
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
