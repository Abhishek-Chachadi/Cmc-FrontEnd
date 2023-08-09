import Link from 'next/link';
import Button from './Button'
const NavigationBar = () => {
  return (
    <nav className="horizontal-navbar">
      <div className="navbar-header"> CLINIC MANAGEMENT SYSTEM </div>

      <ul className="navbar-list">
      <li className="navbar-item">
          <Link href="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link href="/checkup">CheckUp</Link>
        </li>
        <li className="navbar-item">
          <Link href="/customers">
            Customers </Link>
        </li>
        <li className="navbar-item">
          <Link href="/medicines">
            Medicines </Link>
        </li>
        <li className="navbar-item">
          <Link href="/treatments">
            Treatments</Link>
        </li>
        <li className="navbar-item">
          <Link href="/equipments">
            Equipments </Link>
        </li>
        <Button className="navbar-item">Sign In</Button>
      </ul>
    </nav>
  );
};

export default NavigationBar;