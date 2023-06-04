//loose autocomplete
type IconSize = "sm" | "l" | Omit<string,"xs" | "l">;
type LooseAutoComplete<T extends string> = T | Omit<string,T>
interface ShirtSize{
    size: IconSize
}

export const Icon = (props: ShirtSize) => {
    return <>{props}</>;
}

const Comp1 = () => {
    return (
          <>
           <Icon size="sm" />
           <Icon size="l" />
          </>  
    )
}


