import Skeleton from "./components/Skeleton";

export default function Loading() {
  return (
    <div className="max-w- mx-auto pt-8 px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 xl:gap-6">
        <Skeleton isLoading />
        <Skeleton isLoading />
        <Skeleton isLoading />
        <Skeleton isLoading />
        <Skeleton isLoading />
        <Skeleton isLoading />
        <Skeleton isLoading />
        <Skeleton isLoading />
        <Skeleton isLoading />
        <Skeleton isLoading />
        <Skeleton isLoading />
        <Skeleton isLoading />
      </div>
    </div>
  );
}
