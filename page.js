import Counter from './components/Counter';
import UserForm from './components/UserForm';

export default function HomePage() {
  return (
    <section>
      <h1>Welcome to My Next.js App</h1>
      <p>This app demonstrates components, state, events, and conditional rendering.</p>

      <h2>Counter Component</h2>
      <Counter />

      <h2>User Form Component</h2>
      <UserForm />
    </section>
  );
}
