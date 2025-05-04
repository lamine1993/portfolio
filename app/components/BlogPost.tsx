import Image from "next/image";
import Link from "next/link";

interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export default function BlogPost({ id, title, excerpt, date, image, category }: BlogPostProps) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card blog-card h-100">
        <div className="position-relative" style={{ height: '200px' }}>
          <Image
            src={image}
            alt={title}
            fill
            className="card-img-top"
            style={{ objectFit: 'cover' }}
          />
          <div className="category-badge">
            {category}
          </div>
        </div>
        <div className="card-body">
          <div className="blog-date text-muted mb-2">
            {date}
          </div>
          <h3 className="card-title h5">{title}</h3>
          <p className="card-text text-muted">{excerpt}</p>
        </div>
        <div className="card-footer bg-transparent border-0">
          <Link href={`/blog/${id}`} className="btn btn-outline-primary">
            Lire la suite
          </Link>
        </div>
      </div>
    </div>
  );
} 