import React, { Children, isValidElement } from "react";
import { Grid, GridItem } from './Layout.styles';

export interface LayoutProps {
    position?: string;
    placement?: string;
}
export const position = {
    left: 'a / a / n / n',
    right: ' c / c / p / p',
    top: 'a / a / h / h',
    bottom: 'i / i / p / p',
    topLeft: 'a / a / f / f',
    topRight: 'c / c / h / h',
    bottomLeft: 'i / i / n / n',
    bottomRight: 'k / k / p / p',
    center: 'f / f / k / k',
    centerRight: 'g / g / l / l',
    centerLeft: 'e / e / j / j',
    centerTop: 'b / b / g / g',
    centerBottom: 'j / j / o/ o',
    cornerTopLeft: 'a',
    cornerTopRight: 'd',
    cornerBottomLeft: 'm',
    cornerBottomRight: 'p',
};

export const placement = {
    center: 'center center',
    left: 'center flex-start',
    right: 'center flex-end',
    top: 'flex-start center',
    bottom: 'flex-end center',
    topLeft: 'flex-start flex-start',
    topRight: 'flex-start flex-end',
    bottomLeft: 'flex-end flex-start',
    bottomRight: 'flex-end flex-end',
    auto: 'auto',
    withAuto(place: string, isRowDirection: boolean) {
        if (isRowDirection) {
            const a = place.split(' ')
            a[1] = 'auto';
            return `${a[0]} ${a[1]}`
        } else {
            const a = place.split(' ')
            a[0] = 'auto';
            return `${a[0]} ${a[1]}`
        }
    }
}
console.log(placement)

const Layout: React.FC = ({ children }) => {

    const arrayChildren = Children.toArray(children);

    return (
        <Grid>
            {Children.map(arrayChildren, (child) => {
                if (isValidElement(child)) {
                    return (
                        <GridItem area={child.props.position} placement={child.props.placement}>
                            {child}
                            {console.log(child.props)}
                        </GridItem>
                    )
                }
            })}
        </Grid>
    )
}
export default Layout