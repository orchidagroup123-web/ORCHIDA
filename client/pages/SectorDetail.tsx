import { Layout } from '@/components/Layout';
import { useParams, Link } from 'react-router-dom';

export default function SectorDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <Layout>
      <div className="min-h-[calc(100vh-theme(height.20)-theme(height.64))] flex items-center justify-center bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sector: {id}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Detailed information about this sector is coming soon.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-orchida-red hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
