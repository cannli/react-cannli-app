import React from 'react'
import {withRouter} from 'react-router-dom'
import {TabBar} from 'antd-mobile'
import PropTypes from 'prop-types'

@withRouter
class NavLinkBar extends React.Component {
    static propTypes = {
        data: PropTypes.array
    }

    render() {
        const pathname = this.props.location.pathname
        const navList = this.props.data.filter(v => !v.hide)
        return (
            <TabBar>
                {navList.map(v => (
                    <TabBar.Item
                        key={v.path}
                        title={v.title}
                        icon={{uri: require(`./img/${v.icon}.png`)}}
                        selectedIcon={{uri: require(`./img/${v.icon}-active.png`)}}
                        selected={pathname === v.path}
                        onPress={() => {
                            this.props.history.push(v.path)
                        }}
                    >
                    </TabBar.Item>
                ))}
            </TabBar>
        )
    }
}

export default NavLinkBar