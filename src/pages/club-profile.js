import ClubHeader from "./club-header";
import List from "./list";

export default function ClubProfile() {
  return (
    <div>
      <ClubHeader />
      <div class="club-list">
        <List />
      </div>
    </div>
  );
}
