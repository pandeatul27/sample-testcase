import React, {Component} from 'react'

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h1>
          <CommunityTrans>
            OldLabel5
          </CommunityTrans>
        </h1>
        <h3>__("TestCase1 : __")</h3>
        <h3>__communityT("TestCase2: __communityT")</h3>
        <h3>
          <CommunityTrans i18nKey="Testcase9" count={message.length}>
            Hello, <strong>{{name:firstname}}</strong><b>lastname</b>, there has been upto {{count}} testcases.<link>Check them here</link>.
          </CommunityTrans>
        </h3>
        <p>Testcase 11: two t() in one line __("Testcase 11:First Translation") and __communityT("Testcase 11: Another Translation")</p>
      </div>
    )
  }
}

export default NotFound
