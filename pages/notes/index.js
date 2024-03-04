import dynamic from "next/dynamic";
import Link from "next/link";
import PropTypes from 'prop-types';

const LayoutComponent = dynamic(() => import('@/layout'), {
  loading: () => <p>Loading...</p>,
})

export default function Notes({ notes }) {

  return (
    <LayoutComponent metaTitle="Notes" metaDescription="All contents belong to Notes">
      <p className="background-orange">Notes</p>
      {notes.data.map(note => (
        <Link href={`notes/${note.id}`} key={note.id} style={{ border: "1px solid black", width: "100%"}}>
          <ul>
            <li>id: {note.id}</li>
            <li>{`title: ${note.title}`}</li>
            <li>{`description: ${note.description}`}</li>
          </ul>
        </Link>
      ))}
    </LayoutComponent>
  );
};
//SSG Static Set Generator
export async function getStaticProps() {
  const res = await fetch('https://paace-f178cafcae7b.nevacloud.io/api/notes');
  const notes = await res.json();
  return { props: { notes }, revalidate: 10 }
};

Notes.propTypes = {
  notes: PropTypes.object,
};