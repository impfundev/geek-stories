import { SubscribeTabs } from "@/components/shared/dashboard/subscription/SubscribeTabs";

export default function Subscription() {
  const subscribePlan = [
    {
      type: "hobby",
      price: "0",
      description: "The right choice to kickstart.",
      benefit: [
        "Total 1000 Posts, Pages, Tags and Comments",
        "10 GB Media Storage",
        "Basic Theme",
        "Community Supports",
      ],
    },
    {
      type: "pro",
      price: "46000",
      description: "The plan to help you keep growing.",
      benefit: [
        "Total 10000 Posts, Pages, Tags and Comments",
        "100 GB Media Storage",
        "Premium Theme",
        "Community and Expert Supports",
      ],
    },
    {
      type: "enterprise",
      price: "Custom",
      description: "The plan to help you keep growing.",
      benefit: [
        "Unlimited Posts, Pages, Tags and Comments",
        "Start from 1 TB Media Storage",
        "Premium Theme and Custom Theme (by request)",
        "Custom Dashboard (by request)",
        "Enterprise Supports",
      ],
    },
  ];

  return <SubscribeTabs plans={subscribePlan} />;
}
