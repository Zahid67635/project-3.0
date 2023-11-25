import Button from "@/components/buttons/Button";
import DisableButton from "@/components/buttons/DisableButton";
import LinkButton from "@/components/buttons/LinkButton";
import NavLink from "@/components/buttons/NavLink";
import TertiaryLink from "@/components/buttons/TertiaryLink";

function page() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-center">Buttons</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between p-6 border-2 border-gray-200 border-dashed">
          <h3>Primary Button</h3>
          <div className="flex items-center gap-2">
            <Button size="large" variant="primary">
              Button
            </Button>
            <Button size="medium" variant="primary">
              Button
            </Button>
            <Button size="small" variant="primary">
              Button
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between p-6 border-2 border-gray-200 border-dashed">
          <h3>Disable Button</h3>
          <div className="flex items-center gap-2">
            <DisableButton size="large" variant="primary">
              Button
            </DisableButton>
            <DisableButton size="medium" variant="primary">
              Button
            </DisableButton>
            <DisableButton size="small" variant="primary">
              Button
            </DisableButton>
          </div>
        </div>
        <div className="flex items-center justify-between p-6 border-2 border-gray-200 border-dashed">
          <h3>Outline Button</h3>
          <div className="flex items-center gap-2">
            <Button size="large" variant="outline">
              Button
            </Button>
            <Button size="medium" variant="outline">
              Button
            </Button>
            <Button size="small" variant="outline">
              Button
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between p-6 border-2 border-gray-200 border-dashed">
          <h3>Tertiary Button</h3>
          <div className="flex items-center gap-2">
            <Button size="large" variant="tertiary">
              Button
            </Button>
            <Button size="medium" variant="tertiary">
              Button
            </Button>
            <Button size="small" variant="tertiary">
              Button
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between p-6 border-2 border-gray-200 border-dashed">
          <h3>Link Button</h3>
          <div className="flex items-center gap-2">
            <LinkButton href="/" size="large" variant="primary">
              Button
            </LinkButton>
            <LinkButton size="medium" variant="outline">
              Button
            </LinkButton>
            <LinkButton size="small" variant="tertiary">
              Button
            </LinkButton>
          </div>
        </div>
        <div className="flex items-center justify-between p-6 border-2 border-gray-200 border-dashed">
          <h3>Nav Link</h3>
          <div className="flex items-center gap-6">
            <NavLink href="/" size="large">
              Link
            </NavLink>
            <NavLink href="/" size="medium">
              Link
            </NavLink>
            <NavLink href="/" size="small">
              Link
            </NavLink>
          </div>
        </div>
        <div className="flex items-center justify-between p-6 border-2 border-gray-200 border-dashed">
          <h3>Tertiary Link</h3>
          <div className="flex items-center gap-6">
            <TertiaryLink href="/" size="large">
              Link
            </TertiaryLink>
            <TertiaryLink href="/" size="medium">
              Link
            </TertiaryLink>
            <TertiaryLink href="/" size="small">
              Link
            </TertiaryLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
